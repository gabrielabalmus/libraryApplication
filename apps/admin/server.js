const path = require("path");
const cron = require("node-cron");
const { createRequestHandler } = require("@remix-run/express");
const { installGlobals } = require("@remix-run/node");
const compression = require("compression");
const express = require("express");
const morgan = require("morgan");
const moment = require("moment");
const { PrismaClient, Status } = require("@prisma/client");

const prisma = new PrismaClient()

installGlobals();

const BUILD_DIR = path.join(process.cwd(), "build");

const app = express();

app.use(compression());

app.disable("x-powered-by");

app.use(
  "/build",
  express.static("public/build", { immutable: true, maxAge: "1y" })
);

app.use(express.static("public", { maxAge: "1h" }));

app.use(morgan("tiny"));

app.all(
  "*",
  process.env.NODE_ENV === "development"
    ? (req, res, next) => {
        purgeRequireCache();

        return createRequestHandler({
          build: require(BUILD_DIR),
          mode: process.env.NODE_ENV,
        })(req, res, next);
      }
    : createRequestHandler({
        build: require(BUILD_DIR),
        mode: process.env.NODE_ENV,
      })
);
const port = process.env.PORT || 3000;

cron.schedule("0 0 * * *",  async () => {
  await expireLoanReservedStatus()
});

app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

const purgeRequireCache = () => {
  for (const key in require.cache) {
    if (key.startsWith(BUILD_DIR)) {
      delete require.cache[key];
    }
  }
}

const removeDateDays = (days) => {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return date;
};

const expireLoanReservedStatus = async () => {
  try {
    const lastDate = removeDateDays(2);
  
    await prisma.loans.updateMany({
      where: {
        status: Status.RESERVED,
        createdAt: { lte: lastDate },
      },
      data: {
        status: Status.CANCELLED,
      },
    });

    console.log(`Loan reserved status successfully changed to cancelled on 
    ${moment(new Date).format("DD MMM YYYY, HH:mm")}`)
  } catch (err) {
    console.error(
      `Failure on changing loan reserved status to cancelled on
      ${moment(new Date).format("DD MMM YYYY, HH:mm")}` 
    );
  }
};
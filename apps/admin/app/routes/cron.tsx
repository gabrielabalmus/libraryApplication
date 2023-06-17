import moment from "moment";
import prisma from "prisma";
import { Status } from "@prisma/client";
import { removeDateDays } from "@/utils/common";

export const loader = async () => {
  await expireLoansReservedStatus();
  await calculateLoansPenalties();
  return "Crob job successfully run";
};

const expireLoansReservedStatus = async () => {
  try {
    const lastDate = removeDateDays(2);

    await prisma.loans.updateMany({
      where: {
        status: Status.RESERVED,
        createdAt: { lt: lastDate },
      },
      data: {
        status: Status.CANCELLED,
      },
    });

    console.log(`Loans reserved status successfully changed to cancelled on 
      ${moment(new Date()).format("DD MMM YYYY, HH:mm")}`);
  } catch (err) {
    console.error(
      `Failure on changing loans reserved status to cancelled on
        ${moment(new Date()).format("DD MMM YYYY, HH:mm")}`
    );
  }
};
// @ts-nocheck
const calculateLoansPenalties = async () => {
  try {
    const lastDate = removeDateDays(30).toString();

    await prisma.$runCommandRaw({
      update: "Loans",
      updates: [
        {
          q: {
            status: Status.BORROWED,
            $expr: {
              $lt: [
                {
                  $dateToString: {
                    format: "%Y-%m-%dT%H:%M:%S.%LZ",
                    date: "$borrowedAt",
                  },
                },
                lastDate,
              ],
            },
            $or: [{ penalty: { $exists: false } }, { "penalty.paid": false }],
          },
          u: {
            $set: { "penalty.paid": false },
            $inc: { "penalty.days": 1, "penalty.amount": 0.1 },
          },
          multi: true,
        },
      ],
    });

    console.log(`Loans penalties successfully calculated for exceeded borrowed status on 
      ${moment(new Date()).format("DD MMM YYYY, HH:mm")}`);
  } catch (err) {
    console.error(`Failure on calculating loans penalties for exceeded borrowed status on 
      ${moment(new Date()).format("DD MMM YYYY, HH:mm")}`);
  }
};

"use strict";

// server.js
var import_express = require("@remix-run/express");
app.all(
  "*",
  (0, import_express.createRequestHandler)({
    getLoadContext(req, res) {
      return { expressUser: req.user };
    }
  })
);

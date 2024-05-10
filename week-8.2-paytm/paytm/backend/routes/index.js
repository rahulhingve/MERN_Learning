const express = require("express");
const zod = require("zod");
const userRoute = require("./user")
const router = express.Router();
app.use("api/v1/user", userRoute)




module.exports = router;
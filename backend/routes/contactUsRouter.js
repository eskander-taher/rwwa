const express = require("express");
const router = express.Router();

const { sendEmail } = require("../controllers/contactUsController");

router.post("/", sendEmail);

module.exports = router;

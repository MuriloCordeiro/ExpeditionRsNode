const express = require("express");
const router = express.Router();
const xmlParser = require("xml2json");
const SoapController = require("./controllers/SoapController");

router.get("/soap", async (req, res, next) => {
  try {
    const json = await SoapController.callSoap();
    res.send(`Result: ${json}`);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
// test2

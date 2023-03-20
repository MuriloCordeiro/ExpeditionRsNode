const express = require("express");
const router = express.Router();
const xmlParser = require("xml2json");
const SoapController = require("./controllers/SoapController");

router.get("/soap", async (req, res, next) => {
  try {
    const json = await SoapController.callSoap();
    res.send(`Result: ${json}`);
    console.log("esse é o resultado em json", json);
  } catch (error) {
    next(error);
  }
});

module.exports = router;

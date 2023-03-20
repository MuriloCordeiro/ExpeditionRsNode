require("dotenv").config();
const xmlParser = require("xml2json");
const express = require("express");
const app = express();
const routes = require("./routes");

// app.use(express.json());
app.use(routes);

const port = 3333;

app.listen(port, () => {
  console.log(`backend ta rodando na porta ${port}`);
});

// const connectToDataBase = require("./database");

// connectToDataBase();

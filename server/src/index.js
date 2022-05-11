const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello World! CMH FOOD INFO");
});

function start() {
  app.listen(PORT, () => {
    console.log(`Application is up and running on port ${PORT}`);
  });
}

start();

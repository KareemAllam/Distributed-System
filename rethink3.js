const { handleCountRequest } = require("./functions/handleRequest");
const axios = require("axios");
const express = require("express");
const morgan = require("morgan");
const sendToRabbit = require("./functions/SendStatusToRabbit");
const ReceiveDataFromRabbit = require("./functions/ReceiveDataFromRabbit");
const status = require("./routes/status");
const bodyParser = require("body-parser");
const port = 6000;
const app = express();
// Using Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.listen(port, () =>
  console.log(`Rethink Server is listening on Port: ${port}!`)
);

// Default Route
app.post("/", async (req, res) => {
  // const result = await handleCountRequest(req.body.Period);
  handleCountRequest(req.body.Period, result => {
    console.log(result);
    res.send({ result: result });
  });
});

setInterval(() => {
  sendToRabbit("statusD3");
}, 5000);

ReceiveDataFromRabbit("dataD3");

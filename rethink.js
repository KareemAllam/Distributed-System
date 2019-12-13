const { handleCountRequest } = require("./functions/handleRequest");
const sendToRabbit = require("./functions/SendStatusToRabbit");
const ReceiveDataFromRabbit = require("./functions/ReceiveDataFromRabbit");
const axios = require("axios");
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const port = 4000;
// Using Middlewares
app.use(express.json());
app.use(morgan("dev"));

app.listen(port, () =>
  console.log(`Rethink Server is listening on Port: ${port}!`)
);

// Default Route
// post localhost:4000/

// app.post("/", async (req, res) => {
//   // const result = await handleCountRequest(req.body.Period);
//   handleCountRequest(req.body.Period, result => {
//     SendSumToRabbit(result);
//     console.log(result);
//     res.send({ result: result });
//   });
// });

setInterval(() => {
  sendToRabbit("statusD1");
}, 5000);

ReceiveDataFromRabbit("dataD1");

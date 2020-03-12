const express = require('express');
const transactions = require("./routes/transactions");
const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
// connecting the Mongo DB during server start up
connectDB();

// app.use("/api/v1/transactions", transactions);
app.use("/.netlify/functions/express", transactions);

module.exports.handler = serverless(app);
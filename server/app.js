const express = require('express')
const path = require('path')
const cors = require('cors')//make a request not yours, will stop you from making request
const volleyball = require('volleyball')
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

app.use("/api", require("./api"))

app.use(cors())
app.use(volleyball)

app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;


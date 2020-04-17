const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send(`<h1>Running</h1>`);
});

//importing routes
const chat = require("./routes/chat");
app.use("/chat", chat);

//notification
const notification = require("./routes/notification");
app.use("/notify", notification);

//connect to Db
//mongoose.connect(
//  process.env.DB_CONNECTION,
//  { useNewUrlParser: true, useUnifiedTopology: true },
//  () => {
//    console.log("Connected to DB");
//  }
//);

const port = process.env.PORT || 3300;

app.listen(port, console.log("Listening on 3300!"));

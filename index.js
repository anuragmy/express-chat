const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname, "dist")));

const messages = [
  {
    name: "anurag",
    messgae: "hi"
  },
  {
    name: "anurag1",
    messgae: "hi1"
  },
  {
    name: "anurag2",
    messgae: "hi2"
  }
];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.listen(8000, () => console.log("listening..."));

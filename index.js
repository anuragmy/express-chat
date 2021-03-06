const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const path = require("path");
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static(path.resolve(__dirname, "dist")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

let messages = [
  // {
  //   name: "anurag",
  //   message: "hi"
  // },
  // {
  //   name: "anurag1",
  //   message: "hi1"
  // },
  // {
  //   name: "anurag2",
  //   message: "hi2"
  // }
];

app.get("/messages", (req, res) => {
  res.send(messages);
});

app.post("/messages", (req, res) => {
  if (req.body.name && req.body.message) {
    messages.push(req.body);
    io.emit("message", req.body);
    res.sendStatus(200);
  } else {
    res.send("invalid");
  }
});

app.get("/clear", (req, res) => {
  messages = [];
  res.sendStatus(200);
});

io.on("connection", socket => {
  console.log("a user connected");
});
http.listen(8000, () => console.log("listening..."));

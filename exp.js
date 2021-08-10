const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  console.log(process.env.PORT);
  res.sendFile(__dirname + "/templates/index.html");
  res.send("Welcome to Express");
});

app.get("/req1/:id", function (req, res) {
  //  res.send(req.params.id);
  res.send(req.query.id);
});

app.post("/post1", (req, res) => {
  const name = req.body.name;
  res.send("IN POST:" + JSON.stringify(name));
});

app.listen(3001, function (e) {
  console.log("Connected");
});

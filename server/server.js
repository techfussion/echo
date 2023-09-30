import express from "express";

const app = express();

app.get("get", (req, res) => {
  res
    .status(200)
    .send("Welcome to novaglam server... Check docs for more")
    .end();
});

app.listen(5000, () => {
  console.log("App listening on port 5000....");
});

import express from "express";

const app = express();

const port = 5000;

const numbers = [11, 22, 33, 44, 55, 66];

app.get("/", (req, res) => {
  const total = numbers.reduce((a, b) => a + b);
  return res.status(200).json({ data: "lios", total });
});
//postman ma body ma poathauda double quote nai

app.listen(port, () => {
  console.log("connected");
});

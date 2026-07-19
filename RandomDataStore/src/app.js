import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.type("text/plain");
  res.send("API is running successfully");
});

export { app };
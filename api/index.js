const express = require("express");
const app = express();

app.get("*", (req, res) => {
  console.log("hola Mundo");
  res.send({
    mensaje: "hola mundo nuevo",
  });
});

module.exports = app;

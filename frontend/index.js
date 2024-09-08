const express = require("express");
const cors = require("cors");
const { dirname } = require("path");
const app = express();
const port = 4000;

app.use(cors());

app.get("/", (req, res, next) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(port, () => {
  console.log(`Frontend listening on port ${port}`);
});

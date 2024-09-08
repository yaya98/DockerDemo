const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.get("/", (req, res, next) => {
  res.json([
    {
      id: 1,
      joke: "Why don’t skeletons fight each other? They don’t have the guts!",
    },
    {
      id: 2,
      joke: "I’m reading a book on anti-gravity. It’s impossible to put down!",
    },
    {
      id: 3,
      joke: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 4,
      joke: "Why don't eggs tell jokes? They'd crack each other up!",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});

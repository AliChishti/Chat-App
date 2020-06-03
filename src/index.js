const path = require("path");
const express = require("express");

const app = express();

const port = process.env.PORT;

const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

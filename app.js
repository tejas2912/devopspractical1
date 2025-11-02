const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello DevOps from Jenkins Pipeline + Docker!");
});
app.listen(4000, () => console.log("Running on port 3000"));

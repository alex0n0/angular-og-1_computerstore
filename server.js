const express = require("express");
const app = express();
const path = require("path");


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, './dist')));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./dist/index.html"));
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  console.log("app on port", PORT);
});
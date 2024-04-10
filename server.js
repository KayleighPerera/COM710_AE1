const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

// Define a route for serving your index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

// Define a route for serving your spanish page file
app.get("/spanish", (req, res) => {
  res.sendFile(path.join(__dirname, "../spanish.html"));
});

// Define a route for serving your french page file
app.get("/french", (req, res) => {
  res.sendFile(path.join(__dirname, "../french.html"));
});

// Define a route for serving your form page file
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "../form.html"));
});

// Define a route for serving your activities page file
app.get("/activities", (req, res) => {
  res.sendFile(path.join(__dirname, "../activites.html"));
});

// Define a route for serving your modules page file
app.get("/modules", (req, res) => {
  res.sendFile(path.join(__dirname, "../modules.html"));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

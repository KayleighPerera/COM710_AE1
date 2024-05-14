const express = require("express");
const app = express();
app.use(express.json());
const path = require("path");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");

/*connects to the students database*/
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "students",
});

db.connect((err) => {
  if (err) throw err;
  console.log("SQL is connected");
});
// Set the directory for views (optional, if you're using the default 'views' directory, you can skip this)
app.set("views", path.join(__dirname, "views"));

// Define a route to render the EJS file
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/spanish", (req, res) => {
  res.render("spanish");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/activites", (req, res) => {
  res.render("activites");
});

app.get("/french", (req, res) => {
  res.render("french");
});

app.get("/Modules", (req, res) => {
  res.render("Modules");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  try {
    db.query(
      "INSERT INTO student(name, surname, mobilenumber, gender, password, confirmpassword, comment) VALUES(?,?,?,?,?,?,?)",
      [
        req.body.name,
        req.body.surname,
        req.body.mobilenumber,
        req.body.gender,
        req.body.password,
        req.body.confirm_password,
        req.body.comment,
      ],
      (error, results) => {
        if (error) {
          console.error("Error inserting data into database:", error);
          res.render("form", { err: "Error inserting data into database" });
        } else {
          console.log("Data inserted successfully:", results);
          res.render("form", { success: "Data inserted successfully" });
        }
      }
    );
  } catch (err) {
    console.error("Caught an error:", err);
    res.render("form", { err: "Caught an error while processing request" });
  }
});

/*
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
  rs.sendFile(path.join(__dirname, "../form.html"));
});

app.post("/index.php", (req, res) => {
  // Handle POST request here
  console.log("Received POST request");
  // You can process the request body and send a response here
  res.send("POST request received");
});

// Define a route for serving your activities page file
app.get("/activities", (req, res) => {
  res.sendFile(path.join(__dirname, "../activites.html"));
});

// Define a route for serving your modules page file
app.get("/modules", (req, res) => {
  res.sendFile(path.join(__dirname, "../modules.html"));
});
*/
// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

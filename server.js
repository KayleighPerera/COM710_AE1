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

// Defines the routes to render the EJS file
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

app.get("/database_import", (req, res) => {
  db.query(
    "SELECT * FROM student WHERE gender = 'Male'",
    (error, first_results) => {

  db.query(
    "SELECT * FROM student",
        (error, second_results) => {
        res.render("database_import", {
          Friday: first_results,
          Saturday: second_results,
        });
            }
          );
        }
      );
    }
  );


// Define a POST route handler for the "/form" endpoint
app.post("/form", (req, res) => {
  // Log the incoming request body to the console
  console.log(req.body);

  try {
    // Perform a database query to insert form data into the "student" table
    db.query(
      "INSERT INTO student(name, surname, mobilenumber, gender, password, confirmpassword, comment) VALUES(?,?,?,?,?,?,?)",
      [
        req.body.name, // The name field from the form
        req.body.surname, // The surname field from the form
        req.body.mobilenumber, // The mobile number field from the form
        req.body.gender, // The gender field from the form
        req.body.password, // The password field from the form
        req.body.confirm_password, // The confirm password field from the form
        req.body.comment, // The comment field from the form
      ],
      (error, results) => {
        // Handle any errors that occur during the database query
        if (error) {
          console.error("Error inserting data into database:", error);
          // Render the form view with an error message
          res.render("form", { err: "Error inserting data into database" });
        } else {
          // Log success message and query results to the console
          console.log("Data inserted successfully:", results);
          // Render the form view with a success message
          res.render("form", { success: "Data inserted successfully" });
        }
      }
    );
  } catch (err) {
    // Handle any unexpected errors that occur in the try block
    console.error("Caught an error:", err);
    // Render the form view with a generic error message
    res.render("form", { err: "Caught an error while processing request" });
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Log a message indicating the server is running and its address
  console.log("Server is running on http://localhost:3000");
});


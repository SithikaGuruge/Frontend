const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");
var token;
const app = express();

app.use(cors());
app.use(express.json());
const port = 5000;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "jupiter",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

//Get the token from the frontend and send it to the backend
app.post("/api/send-variable", (req, res) => {
  token = req.body.username;
  console.log(token);
  res.send(token);
});

//View personal Information
app.get("/api/personalInfo", (req, res) => {
  db.query(
    `SELECT e.Employee_ID, o.Organization_Name, e.Name,e.Birthdate,e.Marital_status,e.Emergency_contact_Number, es.Status_Type, ej.Job_Title, s.Name as Supervisor_Name FROM employee e natural join organization o natural join employee_status es natural join employee_job_title ej  left join employee s on e.Supervisor_ID = s.Employee_ID  where e.Employee_ID = ?`,
    [token],
    (err, rows, fields) => {
      if (err) {
        console.error("Error querying MySQL:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      } else {
        console.log(rows);
        res.json(rows);
      }
    }
  );
});

//User Login

app.get("/api/userLogin", (req, res) => {
  db.query(
    "SELECT Employee_ID, Password,Job_Title_ID FROM user_account natural join employee ",
    (err, rows, fields) => {
      if (err) {
        console.error("Error querying MySQL:", err);
        res.status(500).json({ error: "Internal server error" });
        return;
      } else {
        console.log(rows);
        res.json(rows);
      }
    }
  );
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

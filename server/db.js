const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "//Eat@2023",
    database: "flight_database"
});

app.post("/signup", (req,res) =>{

  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone_number = req.body.phone_number;
  const date_of_birth = req.body.date_of_birth;

  conn.query("INSERT INTO customers (name, email, password, phone_number, date_of_birth) VALUES (?,?,?,?,?)", 
  [name, email, password, phone_number, date_of_birth], 
  (err, result) => {
    if (err){
      console.log(err);
    }
    // res.status(200).send("registration successful");
  });

});

app.post("/login", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  conn.query(
    "SELECT * FROM customers WHERE email = ? AND password = ?", 
  [email, password], 
  (err, result) => {
    if (err){
      res.send({err:err});
    }

    else {
      if (result) {
        res.send(result)
      }
      else {
        res.send({message: "Wrong username/password"});
      }
    }
  });

})

app.listen(3001, () => {
  console.log("running server");
});

// module.exports = conn;


// conn.connect((err) => {
//     if(err){
//       console.log('Error connecting to Db');
//       return;
//     }
//     console.log('Connection established');
//   });

//   conn.end((err) => {
//     // The connection is terminated gracefully
//     // Ensures all remaining queries are executed
//     // Then sends a quit packet to the MySQL server.
//   });
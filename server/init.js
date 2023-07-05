const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "//Eat@2023",
    database: "flight_database",
})

app.post("/signup", (req, res) =>{
    const sql = "INSET INTO customer (`name`, `email`, `password`, `passport_number`,`passport_exp_date`, `passport_country`, `date_of_birth`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.passport_number,
        req.body.passport_exp_date,
        req.body.passport_country,
        req.body.date_of_birth
    ]
    db.query(sql, [values], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post("/login", (req, res) =>{
    const sql = "SELECT * FROM customer WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("Success");
        }
        else {
            return res.json("Failed");
        }
    })
})

app.listen(3000, () =>{
    console.log("listening");
}
)
// const routesHandler = require("./routes/handler.js");
// const bodyParser = require("body-parser");
// // const pool = require("./config/db.js");
// // const cors = require("cors");

// const app = express();
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
// app.use("/", routesHandler);

// pool.getConnection((err,conn) =>{
//     if (err) throw err;
//     const name = "Eileen";
//     const email = "eileen@gmail.com";
//     const password = "12345"
//     const phone_number =  9999999999;
//     const passport_number = 111122222;
//     const passport_exp_date = Date(2024,1,1);
//     const passport_country = "United States";
//     const date_of_birth = Date(2002,4,6);
//     const qry = "INSERT INTO customer(name, email, password, phone_number, passport_number, passport_exp_date, passport_country, date_of_birth) VALUES(?,?,?,?,?, NOW(),?, NOW())";
//     conn.query(qry,[name, email, password, phone_number, passport_number, 
//         passport_exp_date, passport_country, date_of_birth], (err,result) => {
//         conn.release();
//         if (err) throw err;
//         console.log(result);
//         console.log(qry);
//     });
// })
// app.use(express.json());
// app.use(cors());
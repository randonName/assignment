const HTTP_PORT = process.env.PORT || 8080;
const express = require("express");
const app = express();
var path = require("path");
const multer = require("multer");
//Postgres
//const Sequelize = require('sequelize');

//Express-Handlebar
const exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('view engine', '.hbs');


function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, '/views/home.html'));
  res.render("main", {});
});
/*app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + "/views/main.html"));
});
*/

app.get("/mealPackage", function(req,res){
 res.sendFile(path.join(__dirname + "/views/mealPackage.html"));
});

app.get("/login", function(req, res){
  res.sendFile(path.join(__dirname + "/views/login.html"));
});

app.get("/registration", function(req, res){
  res.sendFile(path.join(__dirname + "/views/registration.html"))
});

app.post("/registered-user" , (req, res)=>{
  const formData = req.body;

  const dataReceived = "<h1>Welcome Back!</h1><br/>" + "<h3>User: " + req.body.email +"</h3><br/>" + "Your submission was received:<br/><br/>" +
    "Your form data was:<br/>" + JSON.stringify(formData) + "<br/>";
  res.send(dataReceived);
});

app.post("/new-user" , (req, res)=>{
  const formData = req.body;

  const dataReceived = "<h1>Welcome " + req.body.firstname + "<br/>" + "<h3>Your username is: " + req.body.email + "</h3><br/>" + "Your submission was received:<br/><br/>" + "Your form data was:<br/>" + JSON.stringify(formData) + "<br/><br/><br/>" + "Please Verify Your Information Below: <br/>" + "<table border = '1'><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th></tr>" + "<tr><td>" + req.body.firstname + "</td> "+ "<td>" + req.body.lastname + "</td>" + "<td>" + req.body.email + "</td>" + "<td>" + req.body.password + "</td></tr>" +"</table>";
  res.send(dataReceived);
});


app.use(express.static('./public/'));



app.use((req, res) => {
  res.status(404).send("Page Not Found");
});


app.listen(HTTP_PORT, onHttpStart);

//Express-Handlebar


/* //Postgres
var sequelize = new Sequelize('dam3o47dlasf3i', 'qmegfvdktshojn', 'b9a9c24131c3d9133304035b02a78d491e3951aca37eeb556ba03524e13ebd45', {
    host: 'host',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

sequelize
    .authenticate()
    .then(function() {
        console.log('Connection has been established successfully.');
    })
    .catch(function(err) {
        console.log('Unable to connect to the database:', err);
    });


var User = sequelize.define('User', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.TEXT,
    password: Sequelize.TEXT
});

sequelize.sync().then(function () {

    User.create({
        
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.TEXT,
        password: Sequelize.TEXT
        
    }).then(function (user) {
        console.log("success!")
    }).catch(function (error) {
        console.log("something went wrong!");
    });
});
*/
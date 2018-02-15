var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
  dataTable();
});

var dataTable = function() {
  connection.query("SELECT * FROM Bamazon", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].artist + " | " + res[i].title);
    }
    console.log("--------------------------------------");
  });
} 
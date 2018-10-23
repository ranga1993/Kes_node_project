var express = require('express');
// var mysql = require('mysql');
var bodyparser = require('body-parser');
var cors = require('cors');

var app = express();

const route = require('./route/routes');
const mongoRoute = require('./route/mongoRoutes');

// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test'
// });

// mysqlConnection.connect(function(err){
//     if(!err){
//         console.log("DB Connection is Successful");
//     }
//     else{
//         console.log("DB Connection is failed");
//     }
// });

const PORT = 3000;

app.use(cors());

app.use(bodyparser.json());

app.use('/api', route);
app.use('/mongoapi', mongoRoute);

app.get('/', function(req, res){
    res.send("Hello Ranga");
});

app.listen(PORT, function(){
    console.log("Server has been started at port no: " + PORT);
});
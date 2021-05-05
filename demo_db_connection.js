const loginData = require('./loginData');
var mysql = require('mysql');


var con = mysql.createConnection({
	host: loginData.host,
	user: loginData.user,
	password: loginData.password,
	database: loginData.database		
});

var sql = "SELECT getIdByGameName('Age of Empires');"
//var sql = "SELECT * FROM All_Games;"

con.connect(function(err){
	if(err) throw err;
	console.log("Connected!");
	con.query(sql, function(err, result, fields){
		 if(err) throw err;
		 console.log("Result: " + JSON.stringify(result));
		 console.log();
		 process.exit(0);
	});
});

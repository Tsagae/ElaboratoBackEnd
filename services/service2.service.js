const express = require("express");
var MySqlInterface = require("./MySqlInterface.service");
const loginData = require("../loginData");
const mysql = require("mysql");

function execQuery(sql) {
  var outResult;
  let con = mysql.createConnection({
    host: loginData.host,
    user: loginData.user,
    password: loginData.password,
    database: loginData.database,
  });

  con.connect(function (err) {
    if (err) outResult = err; //TODO remove for production
    console.log("Connected!");
    con.query(sql, function (err, result, fields) {
      if (err) outResult = err; //TODO remove for production
      outResult = JSON.stringify(result);
      console.log(outResult);
    }); 
  });
  return outResult;
}

module.exports = {
  getList: (req, res) => {
    let list = execQuery("SELECT * FROM All_Games LIMIT 100");
    console.log(list);
    return res.status(200).json({ list: list });
  },
};

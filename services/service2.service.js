const express = require("express");

module.exports = {
  getList: (req, res) => {
    const loginData = require("../loginData");
    const mysql = require("mysql");

    var con = mysql.createConnection({
      host: loginData.host,
      user: loginData.user,
      password: loginData.password,
      database: loginData.database,
    });

    var sql = "SELECT getIdByGameName('Age of Empires');";
    //var sql = "SELECT * FROM All_Games;"

    con.connect(function (err) {
      if (err) return err; //TODO remove for production
      console.log("Connected!");
      con.query(sql, function (err, result, fields) {
        if (err) return err; //TODO remove for production
        console.log("Result: " + JSON.stringify(result));
        return res.status(200).json(JSON.stringify(result));
      });
    });
  },
};

const express = require("express");

function execQuery(sql, res) {
  const loginData = require("../loginData");
  const mysql = require("mysql");

  var con = mysql.createConnection({
    host: loginData.host,
    user: loginData.user,
    password: loginData.password,
    database: loginData.database,
  });

  con.connect(function (err) {
    if (err) return err; //TODO remove for production
    console.log("Connected!");
    con.query(sql, function (err, result, fields) {
      if (err) return err; //TODO remove for production
      //console.log("Result: " + JSON.stringify(result));
      return res.status(200).json(result);
    });
  });
}

module.exports = {
  getIdByGameName: (req, res) => {
    let sql = "SELECT getIdByGameName(" + req.query.name + ");";
    execQuery(sql, res);
  },
  getList: (req, res) => {
    return res.status(200).json({ list: "list" });
  },
  getTwitchGlobal_HoursWatched: (req, res) => {
    let sql = "SELECT * FROM db_zaghe.TwitchGlobal_HoursWatched;";
    execQuery(sql, res);
  },
  getHistoricalEsportData_Post2016: (req, res) => {
    let sql = "SELECT * FROM HistoricalEsportData_Post2016;";
    execQuery(sql, res);
  },
  getMostViewed12Months: (req, res) => {
    let sql = "SELECT * FROM MostViewed12Months;";
    execQuery(sql, res);
  },
};

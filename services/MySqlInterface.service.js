const express = require("express");
const loginData = require("../loginData");
const mysql = require("mysql");

module.export = {
  prova: () =>{
    return res.status(200).json({ provaJson: "provafunziona" });
  },

  execQuery: (sql) => {
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
        console.log("Result: " + JSON.stringify(result));
        outResult = result;
      });
    });
    return res.status(200).json({ out: outResult });
  },
};

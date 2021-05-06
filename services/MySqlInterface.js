const express = require("express");
const loginData = require("../loginData");
const mysql = require("mysql");

module.export = {
  execQuery(sql) {
    let con = mysql.createConnection({
      host: loginData.host,
      user: loginData.user,
      password: loginData.password,
      database: loginData.database,
    });

    con.connect(function (err) {
      if (err) return err;
      console.log("Connected!");
      con.query(sql, function (err, result, fields) {
        if (err) return err;
        console.log("Result: " + JSON.stringify(result));
        return result;
      });
    });
    return 1;
  }
}

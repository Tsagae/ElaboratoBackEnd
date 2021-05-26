const express = require("express");

const loginData = require("../loginData");
const mysql = require("mysql");

var pool = mysql.createPool({
  host: loginData.host,
  user: loginData.user,
  password: loginData.password,
  database: loginData.database,
  connectionLimit: loginData.connectionLimit,
});

pool.getConnection(function (err, connection) {
  if (err) {
    console.log('[ERROR] Connecting to database "' + err.toString() + '"');
    setTimeout(function () { database_connection(); }, 2500);
  }
  else {
    pool.query('SET NAMES utf8');
    pool.query('SET CHARACTER SET utf8');
    console.log('[INFO] Connected to database and set utf8!');
  }
});

function execQuery(sql, res) {

  pool.query(sql, function (err, result, fields) {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: "query error" })
    };
    //console.log("Result: " + JSON.stringify(result));
    console.log("Query!")
    return res.status(200).json(result);
  });

}

module.exports = {
  getIdByGameName: (req, res) => {
    let sql = "SELECT getIdByGameName(" + req.query.name + ");";
    execQuery(sql, res);
  },
  getHistoricalEsportData_Post2016: (req, res) => {
    let sql = "SELECT * FROM HistoricalEsportData_Post2016;";
    execQuery(sql, res);
  },
  getHoursWatched: (req, res) => {
    let sql = "SELECT * FROM db_zaghe.HoursWatched;";
    execQuery(sql, res);
  },
  getMostPlayed12Months: (req, res) => {
    let sql = "SELECT * FROM db_zaghe.MostPlayed12Months;";
    execQuery(sql, res);
  },
  getMostViewed12Months: (req, res) => {
    let sql = "SELECT * FROM MostViewed12Months LIMIT 15;";
    execQuery(sql, res);
  },
  getTwitchGlobal_HoursWatched: (req, res) => {
    let sql = "SELECT * FROM db_zaghe.TwitchGlobal_HoursWatched;";
    execQuery(sql, res);
  },
  getMostPlayedEsportGamesOffset: (req, res) => {
    let sql = "CALL db_zaghe.getMostPlayedEsportGamesOffset(" + req.query.offset + ", " + req.query.limit + ");";
    execQuery(sql, res);
  },
  getMostViewedEsportGamesOffset: (req, res) => {
    let sql = "CALL db_zaghe.getMostViewedEsportGamesOffset(" + req.query.offset + ", " + req.query.limit + ");";
    execQuery(sql, res);
  },
  getGameInfo: (req, res) => {
    let sql = "CALL `db_zaghe`.`getGameInfo`(" + req.query.gameID + ");";
    execQuery(sql, res);
  },
  getGeneralGameInfo: (req, res) => {
    let sql = "CALL `db_zaghe`.`getGeneralGameInfo`(" + req.query.gameID + ");";
    execQuery(sql, res);
  },
  getHighestEarningPlayersOffset: (req, res) => {
    let sql = "CALL db_zaghe.getHighestEarningPlayersOffset(" + req.query.offset + ", " + req.query.limit + ");";
    execQuery(sql, res);
  },
  getHighestEarningCountries: (req, res) => {
    let sql = "CALL db_zaghe.getHighestEarningCountries();";
    execQuery(sql, res);
  },
  getAllGames: (req, res) => {
    let sql = "CALL getAllGames();";
    execQuery(sql, res);
  },
  getHighestEarningCountries: (req, res) => {
    let sql = "CALL getHighestEarningCountries();";
    execQuery(sql, res);
  },
  getHighestEarningPlayersByGame: (req, res) => {
    let sql = "CALL db_zaghe.getHighestEarningPlayersByGame(" + req.query.gameID + ");";
    execQuery(sql, res);
  },
  getTournamentByGameOffset: (req, res) => {
    let sql = "CALL db_zaghe.getTournamentByGameOffset(" + req.query.gameID + ", " + req.query.offset + ", " + req.query.limit + ");";
    execQuery(sql, res);
  },
  getAnnualEsportGrowth: (req, res) => {
    let sql = "CALL db_zaghe.getAnnualEsportGrowth();";
    execQuery(sql, res);
  },
};

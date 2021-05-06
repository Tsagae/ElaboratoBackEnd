const express = require("express");
const sql = require("./MySqlInterface");

module.exports = {
  getList: (req, res) => {
    const list = sql.execQuery("SELECT * FROM All_Games");

    return res.status(200).json({ list: list });
  },
};

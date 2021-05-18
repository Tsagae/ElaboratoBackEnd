const express = require('express');
const router = express.Router();

const queryDB = require('../services/queryDB.service');

router.get('/', queryDB.getList);
router.get('/getIdByGameName', queryDB.getIdByGameName);
router.get('/getTwitchGlobal_HoursWatched', queryDB.getTwitchGlobal_HoursWatched);
router.get('/getHistoricalEsportData_Post2016', queryDB.getHistoricalEsportData_Post2016);
router.get('/getMostViewed12Months', queryDB.getMostViewed12Months);
router.get('/getMostPlayed12Months', queryDB.getMostPlayed12Months);
router.get('/getMostWatched12Months', queryDB.getMostWatched12Months);
router.get('/getAllEsportGames', queryDB.getAllEsportGames);

module.exports = router;

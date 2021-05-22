const express = require('express');
const router = express.Router();

const queryDB = require('../services/queryDB.service');

router.get('/getIdByGameName', queryDB.getIdByGameName);
router.get('/getHistoricalEsportData_Post2016', queryDB.getHistoricalEsportData_Post2016);
router.get('/getHoursWatched', queryDB.getHoursWatched);
router.get('/getMostPlayed12Months', queryDB.getMostPlayed12Months);
router.get('/getMostViewed12Months', queryDB.getMostViewed12Months);
router.get('/getTwitchGlobal_HoursWatched', queryDB.getTwitchGlobal_HoursWatched);
router.get('/getMostPlayedEsportGamesOffset', queryDB.getMostPlayedEsportGamesOffset);
router.get('/getMostViewedEsportGamesOffset', queryDB.getMostViewedEsportGamesOffset);
router.get('/getGameInfo', queryDB.getGameInfo);
router.get('/getGeneralGameInfo', queryDB.getGeneralGameInfo);

module.exports = router;

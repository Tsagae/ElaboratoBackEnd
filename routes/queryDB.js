const express = require('express');
const router = express.Router();

const queryDB = require('../services/queryDB.service');

router.get('/', queryDB.getList);
router.get('/getIdByGameName', queryDB.getIdByGameName);
router.get('/getTwitchGlobal_HoursWatched', queryDB.getTwitchGlobal_HoursWatched);
router.get('/getHistoricalEsportData_TournamentCount', queryDB.getHistoricalEsportData_TournamentCount);

module.exports = router;

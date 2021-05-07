const express = require('express')
const router = express.Router()

const service3 = require('../services/service3.service')

router.get('/', service3.getItem)

module.exports = router

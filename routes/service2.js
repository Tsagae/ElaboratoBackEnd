const express = require('express')
const router = express.Router()

const service2 = require('../services/service2.service')

router.get('/', service2.getList)

module.exports = router

const express = require('express')
const router = express.Router()
const controller = require('./controller.js')

router.post('/login',controller.LOGIN)

module.exports = router
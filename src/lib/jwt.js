const jwt = require('jsonwebtoken')
const { secret } = require('../config')

module.exports ={
    sign: (payload) => jwt.sign(payload , secret),
    verify: (token) => jwt.verify(token , secret)
}
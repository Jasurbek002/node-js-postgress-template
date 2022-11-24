const { fetch } = require('../../lib/postgres.js')
const {verify} = require('./../../lib/jwt.js')
const {ADDBALANCE} = require('./query.js')
async function ADD_BALANCE({tempscore},{token}){
  try {

    let {id} = verify(token)
    let balance = await fetch(ADDBALANCE,tempscore,id)
    return balance

  } catch (error) {
    console.log(error)
  }
}
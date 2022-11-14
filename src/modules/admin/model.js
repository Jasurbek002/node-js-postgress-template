const { verify } = require('../../lib/jwt.js')
const {fetch} =  require('../../lib/postgres.js')
const {GETLOGIN,GETREGISTER,PUTADMIN,GETUSER,PUTUSER,PUT_USER_ACCOUNT}  = require('./query.js')

const GET = async () =>{
    try {
        let user = await fetch(GETUSER)
        return user 
    } catch (error) {
        console.log(error)
    }
}

const PUT_USER = async ({username,lastname,password,email,score},{userId}) =>{
    try {
        let user = await fetch(PUT_USER_ACCOUNT,username,lastname,password,email,userId)
        let putUser = await fetch(PUTUSER,score,userId)
        user.balance = putUser.score
        delete user.password
        return user
    } catch (error) {
        console.log(error)
    }
}

const PUT = async ({adminname,password},{token}) =>{
    try {
        let {id,status} = verify(token)
       if(status === 'admin'){
        let admin = await fetch(PUTADMIN,adminname,password,id)
        delete admin.password
        return admin
       }else{
        return 'you are not admin!'
       }
    } catch (error) {
        console.log(error)
    }
}

const LOGIN = async ({adminname,password}) =>{
    try {
        let admin =  await fetch(GETLOGIN,adminname,password)
        return admin  
    } catch (error) {
        console.log(error)
    }
    
}
const REGISTER = async ({adminname,password},{token}) =>{
        try {
            let {status} = verify(token)
            if(status === 'admin'){
               let admin = await fetch(GETREGISTER,adminname,password)
               delete admin.password
               return admin
            }
        } catch (error) {
            console.log(error)
        }
}

module.exports ={
   LOGIN ,REGISTER, GET , PUT ,PUT_USER
}
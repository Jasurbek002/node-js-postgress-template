const model = require('./model.js')
const {sign} = require('../../lib/jwt.js')
const {secretkey} = require('../../config.js')

const LOGIN = async (req,res) =>{
    try {
        let user = await model.LOGIN(req.body)
        if(user){
            res.status(200).json({
                status:200,
                message:'your are login',
                token:sign(user.user_id,secretkey)
            })
        }else{
            res.status(200).json({
                status:404,
                message:'user not found',
                token:null
            })
        }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    LOGIN
}
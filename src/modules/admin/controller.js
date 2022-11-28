const model = require('./model.js')
const {sign} =  require('../../lib/jwt.js')


const PUT_USER = async (req,res) =>{
try {
  
      let putUser = await model.PUT_USER(req.body,req.params,req.headers)
      if(putUser){
         res.status(201).json({
            status:201,
            message:'user updated!',
            data:putUser
         })
      }else{
         res.status(404).json({
            status:404,
            message:'user not found',
            data:null
         })
      }
  
} catch (error) {
   console.log(error)
}
}


const DELETE = async (req,res) =>{
try {
   let deleteUser = await model.DELETE(req.headers,req.params)
   if(deleteUser){
      res.status(203).json({
         status:203,
         message:"user deleted!",
         data:deleteUser
      })
   }else{
      res.status(404).json({
         status:404,
         message:"user not found",
         data:null
      })
   }
} catch (error) {
   
}
}

const GET = async (req,res) =>{
try {
   let user = await model.GET()
   if(user){
      res.status(200).json({
         status:200,
         message:'ok',
         data:user
      })
   }else{
      res.status(404).json({
         status:404,
         message:'users not found',
         data:null
      })
   }
} catch (error) {
   console.log(error)
}
}

const PUT = async (req,res) =>{
   try {
     let admin = model.PUT(req.body,req.headers) 
     if(admin){
      res.status(200).json({
         status:200,
         message:'admin edited!',
         data:admin
      })
     }else{
      res.status(404).json({
         status:404,
         message:'admin not found!',
         data:null
      })
     }
   } catch (error) {
      console.log(error)
   }
}

const LOGIN = async (req,res) =>{
   let admin =  await model.LOGIN(req.body)
   if(admin){
     res.status(200).json({
        status:200,
        message:'your a login',
        token: sign({id:admin.admin_id,status:admin.status})
     })
   }else{
    res.status(403).json({
        status:403,
        message:'inwalid username or password',
        token:null
     })
   }
}



const REGISTER = async (req,res) =>{
    let admin =  await model.REGISTER(req.body,req.headers)
    if(admin){
      res.status(201).json({
         status:201,
         message:'your a registred',
         token: sign({id:admin.admin_id,status:admin.status})
      })
    }else{
     res.status(403).json({
         status:403,
         message:'inwalid username or password',
         token:null
      })
    }
 }


const PENDING =async (req,res) =>{
try {
   let pendingBalance = await model.PENDING(req.headers)
   if(pendingBalance){
      res.status(200).json({
         status:200,
         message:'succsess!',
         data:pendingBalance
      })
   }else{
      res.status(403).json({
         status:403,
         message:'Folbiddin!',
         data:null
      })
   }
} catch (error) {
   console.log(error)
}
 }


 const SUCCESSFUL = async (req,res) =>{
   try {
      let successfulBalance = await model.SUCCESSFUL(req.headers)
      if(successfulBalance){
         res.status(200).json({
            status:200,
            message:'succsess!',
            data:successfulBalance
         })
      }else{
         res.status(403).json({
            status:403,
            message:'Folbiddin!',
            data:null
         })
      }
   } catch (error) {
      console.log(error)
   }
    }

    const REJECTED = async (req,res) =>{
      try {
         let rejectfulBalance = await model.REJECTED(req.headers)
         if(rejectfulBalance){
            res.status(200).json({
               status:200,
               message:'succsess!',
               data:rejectfulBalance
            })
         }else{
            res.status(403).json({
               status:403,
               message:'Folbiddin!',
               data:null
            })
         }
      } catch (error) {
         console.log(error)
      }
       }

       const PUT_SUCCESSFUL = async (req,res) =>{
         try {
            let rejectfulBalance = await model.PUT_SUCCESSFUL(req.headers,req.params,req.body)
            if(rejectfulBalance){
               res.status(200).json({
                  status:200,
                  message:'succsess!',
                  data:rejectfulBalance
               })
            }else{
               res.status(403).json({
                  status:403,
                  message:'Folbiddin!',
                  data:null
               })
            }
         } catch (error) {
            console.log(error)
         }
          }

          const PUT_REJECTED = async (req,res) =>{
            try {
               let rejectfulBalance = await model.PUT_REJECTED(req.headers,req.params)
               if(rejectfulBalance){
                  res.status(200).json({
                     status:200,
                     message:'succsess!',
                     data:rejectfulBalance
                  })
               }else{
                  res.status(403).json({
                     status:403,
                     message:'Folbiddin!',
                     data:null
                  })
               }
            } catch (error) {
               console.log(error)
            }
             }




module.exports = {
    LOGIN,
    REGISTER,
    GET,
    PUT,
    PUT_USER,
    DELETE,
    PENDING,
    SUCCESSFUL,
    REJECTED,
    PUT_SUCCESSFUL,
    PUT_REJECTED
}
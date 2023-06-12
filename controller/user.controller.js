const UserService=require('../services/user.service');

exports.register=async(req,res,next)=>{

    try{

        const {email,password}=req.body;

        await UserService.registerUser(email,password);

        res.json({status:true,success:"User successfully registered"});

    }catch(err){ 
        throw err;
    }

}
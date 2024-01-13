const User =require('../models/user');
const test=(req,res)=>{
    res.json('test is working')
}
const registerUser=async(req,res)=>{
    try{
        const {name,email,password,cpass}=req.body;
        //check if name was entered
        if(!name){
            return res.json({
                error:`name is required`
            })
        };
        //check if password is good
        if(!password || password.length < 6){
            return res.json({
                error:'password is required and should be at least  6 character long'
            })
        };
        if(cpass !=password){
            return res.json({
                error:'passwords are not matching'
            })
        }
        //check email if it exists
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error:'email is taken already'
            })
        }
        const user=await User.create({
            name,email,password
        })
        return res.json(user)
    }catch(error){
console.log(error)
    }
}
const loginUser=async (req, res)=>{
try{
const {name, password}=req.body;

//check if user exists
const user=await User.findOne({name});
if(!user){
    return res.json({
        error:'No user found'
    })   
}
//check if password match
const match=await comparePassword(password, user.password)
if (match){
   res.json('password match')
}
}catch(error){
  console.log(error)
}
}
module.exports={
    test,
    registerUser,
    loginUser
};

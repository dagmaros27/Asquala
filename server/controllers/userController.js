const asyncHandler = require("express-async-handler");
const User = require("../models/User")
const bcrypt = require("bcrypt");

// Get all users
const getUsers = asyncHandler( async (req,res)=>{
        const users = await  User.find();
           res.status(200).json(users);
})

//Get user
const getUser = asyncHandler( async (req,res)=>{
    const user = await  User.findById(req.params.id);
    const {password, ...args} = user._doc;
       res.status(200).json(args);
})

// Create user account
const setUser = asyncHandler( async (req, res)=> {
   const salt = await bcrypt.genSalt(10);
   const hashedpass = await bcrypt.hash(req.body.password,salt)
   const newuser = new User({
    username: req.body.username,
    password: hashedpass,
    email: req.body.email
   })

   const user = await newuser.save();
   const {password, ...args} = user._doc;

   res.status(200).json(args);
})

//update user
const updateUser = asyncHandler(async  (req, res)=> {
    if(!req.params.id === req.body.userId){
         
         const salt = await bcrypt.genSalt(10);
         const hashedpass = await bcrypt.hash(req.body.password,salt)

    const update = {
        username: req.body.username,
        password: hashedpass,
        email: req.body.email
    }
    const updated = await User.findByIdAndUpdate(req.params.id, update);
        res.status(200).json(updated)
}
    else{
        res.status(401).json("access_denied")
    }
})

//Delete user
const deleteUser  = asyncHandler(async  (req, res) =>{
    console.log(req.body.userId);
    console.log(req.params.id);
    if(req.body.userId === req.params.id){
     await User.findByIdAndDelete(req.params.id)
    res.status(200).json("deleted")
     } else{
         res.status(404).json("access_denied")
    }
})

module.exports = {
    getUsers,
    getUser,
    setUser,
    updateUser,
    deleteUser
}
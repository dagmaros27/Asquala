const asyncHandler = require("express-async-handler");
const User = require("../models/User")
const bcrypt = require("bcrypt");

const getAuth = asyncHandler( async (req,res)=>{
      const user = await User.findOne({username: req.body.username})
      !user && res.status(400).json("wrong username")

      const validate = await bcrypt.compare(req.body.password,user.password)
      !validate && res.status(400).json("wrong password")

        const {password, ...others} = user._doc;
        res.status(200).json(others);
})

module.exports = {getAuth};


const router = require('express').Router();
const {getUsers, getUser, setUser, updateUser, deleteUser} = require("../controllers/userController");
const {getAuth} = require("../controllers/authController");


router.get("/user/all",getUsers)


router.get("user/:id",getUser)

router.post("/user/register",setUser)

router.get("/user/auth/login",getAuth)

router.delete("/user/delete/:id",deleteUser)

module.exports = router;
const express=require('express');
const router=express.Router();
const adminLoginFunctionBackend=require("../Controllers/AdminLoginController")
router.use('/admin-login',adminLoginFunctionBackend)
module.exports=router;
const express=require("express");
const router=express.Router();
const {submitContactForm,getContactDetailsFunction,deleteContactDetailsFunction}=require('../Controllers/ContactController')
router.post("/submitContactFrom",submitContactForm);
router.get("/getcontactdetails",getContactDetailsFunction)
router.get("/delete-contact-user/:id",deleteContactDetailsFunction)
module.exports=router
const mongoose=require("mongoose");
const ContactFromSchema=new mongoose.Schema({
    name:{
        type:String
    },
    companyName:{
        type:String
    },
    phone:{
        type:String
    },
    email:{
        type:String
    },
    message:{
        type:String
    },
    enquiryType:{
        type:String
    },
})
const ContactFromModel=mongoose.model("Contact_From_Details",ContactFromSchema);
module.exports=ContactFromModel
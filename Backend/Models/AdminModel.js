const mongoose=require('mongoose');
const AdminSchema=new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})
const AdminModel=mongoose.model('Admin_Details',AdminSchema);
module.exports=AdminModel;
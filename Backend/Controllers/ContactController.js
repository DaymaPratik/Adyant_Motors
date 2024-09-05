const ContactFromModel=require('../Models/ContactFromModel')
const submitContactForm=async(req,res)=>{
    try {
        const {name,companyName,phone,email,message,enquiryType}=req.body;
        const newFromDetails=await ContactFromModel.create({
            name,
            companyName,
            phone,
            email,
            message,
            enquiryType
        })
        res.status(200).json({success:true,message:"Contact form details submited successfully"})
    } catch (error) {
        console.log("Error while contact form submited",e);
        res.status(400).json({success:false,message:"Error in backend contact form details not submited"})
    }
}



const getContactDetailsFunction=async(req,res)=>{
    try {
        const contactsArray=await ContactFromModel.find({});
        res.status(200).json({success:true,message:"Contact form details fetch successfully",contactsArray})
    } catch (error) {
        console.log("Error while getting contact details",error);
        res.status(400).json({success:false,message:"Error in backend contact form details not submited"})
    }
}
const deleteContactDetailsFunction=async(req,res)=>{
    const {id}=req.params;
    try {
        const deletedContactUser=await ContactFromModel.findByIdAndDelete(id)
        res.status(200).json({success:false,message:"Deleted Successfully"})
    } catch (error) {
        console.log("ERROR WHILE DELETEING CONTACT USER BACKEND",error);
        res.status(400).json({success:false,message:"Mot able Delete"})
        
    }
}
module.exports={submitContactForm,getContactDetailsFunction,deleteContactDetailsFunction}
const AdminModel=require('../Models/AdminModel')
const adminLoginFunctionBackend = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!(email && password)) {
        return res.status(200).json({ success: false, message: "All fields required" });
    }

    try {
       
        // const ifExistsAdmin = await AdminModel.findOne({ email });
        // if (!ifExistsAdmin) {
        //     return res.status(200).json({ success: false, message: "This admin email doesn't exist" });
        // }


        // if (!(ifExistsAdmin.password === password)) {
        //     return res.status(200).json({ success: false, message: "Enter valid password" });
        // }

   
        // return res.status(200).json({ success: true, message: "Login successful", adminObj: ifExistsAdmin });



        const newAdmin=await AdminModel.create({email,password});
        return res.status(200).json({ success: true, message: "admin create successfully successful", adminObj: newAdmin })
    } catch (error) {
        console.log("Error while admin login backend", error);
        return res.status(500).json({ success: false, message: "Error while admin login backend" });
    }
};



module.exports=adminLoginFunctionBackend;
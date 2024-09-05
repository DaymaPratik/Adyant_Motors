const AdminModel=require('../Models/AdminModel')
const adminLoginFunctionBackend = async (req, res) => {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!(email && password)) {
        return res.status(200).json({ success: false, message: "All fields required" });
    }

    try {
        // Check if admin exists
        const ifExistsAdmin = await AdminModel.findOne({ email });
        if (!ifExistsAdmin) {
            return res.status(200).json({ success: false, message: "This admin email doesn't exist" });
        }

        // Check if password matches
        if (!(ifExistsAdmin.password === password)) {
            return res.status(200).json({ success: false, message: "Enter valid password" });
        }

        // Successful login
        return res.status(200).json({ success: true, message: "Login successful", adminObj: ifExistsAdmin });

    } catch (error) {
        console.log("Error while admin login backend", error);
        return res.status(500).json({ success: false, message: "Error while admin login backend" });
    }
};

module.exports=adminLoginFunctionBackend;
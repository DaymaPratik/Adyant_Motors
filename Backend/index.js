const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const app=express();
const ContactRouter=require("./Routes/contactRoute")
const AdminLoginRouter=require("./Routes/AdminLoginRoute")
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: 'POST,GET',
}))
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/Adyant_Motors")
.then(()=>{console.log("DB CONNECTED SUCCESSFULLY")})
.catch((e)=>{console.log("ERROR CONNECTING DB",e);})
app.use(ContactRouter)
app.use(AdminLoginRouter)
app.listen(10000,()=>{
    console.log("SEVER IS LISTENING AT PORT 10000");
})

// RENDER URL:https://adyant-motors.onrender.com
// VERCEL URL:https://adyant-motors.vercel.app
// LOCAL HOST FONTEND:http://localhost:5173
// LOCAL HOST BACKEND:http://localhost:10000
// MONGO LOCAL HOST:mongodb://localhost:27017/Adyant_Motors
// MONGO CLOUD URL :mongodb+srv://pratikdayma45:LzJlylhbT6B09Fqd@cluster0.cpq5ooo.mongodb.net/Adyant_Motors
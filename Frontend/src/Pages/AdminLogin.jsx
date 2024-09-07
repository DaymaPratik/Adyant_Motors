import { useContext, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import SideBar from "../Components/SideBar";
import { SideBarContext } from "../Context/SideBarContextProvider";
import { AdminContext } from "../Context/AdminContextProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {BounceLoader, FadeLoader} from "react-spinners"


// eslint-disable-next-line react/prop-types
function AdminLogin() {
    const {admin,setAdmin}=useContext(AdminContext);
    const [submitLoading,setSubmitLoading]=useState(false);
    const {showSideBar,loading,setShowSideBar,setLoading}=useContext(SideBarContext)
  const [allRequired, setAllRequired] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate=useNavigate();
  useEffect(()=>{
    window.scrollTo(0, 0);
    setShowSideBar(false);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])

  const [validUser, setValidUser] = useState({
    emailResponse: "",
    passResponse: "",
  });
  const handleChangeFunction = (e) => {
    const { name, value } = e.target;
    setAdmin({
      ...admin,
      [name]: value,
    });
  };
  ;

  const loginUserFunction = async (e) => {
    e.preventDefault();
    setSubmitLoading(true);
    try {
        const response = await fetch("https://adyant-motors.onrender.com/admin-login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(admin),
        });
   
        
        if (!response.ok) {
            // Handle HTTP errors
            const errorData = await response.json();
            console.error("HTTP error:", errorData.message);
            return;
        }

        const data = await response.json();
        console.log(data);
        if (data.success) {
            // Handle successful login
            setAdmin(data.adminObj);
            setAdmin(prevAdmin => ({
                ...prevAdmin,
                isLogin: true,
            }));
            navigate("/adminDashboard");
            toast("Admin Login Successful");
            setSubmitLoading(false)
        } else {
            // Handle login errors based on the message
            if (data.message === "This admin email doesn't exist") {
                setValidUser({
                    passResponse: "",
                    emailResponse: "This admin email doesn't exist"
                });
                setSubmitLoading(false)
            } else if (data.message === "Enter valid password") {
                setValidUser({
                    emailResponse: "",
                    passResponse: "Enter valid password"
                });
                setSubmitLoading(false)
            } else if (data.message === "All fields Required") {
                setAllRequired("All Fields Required");
                setValidUser({
                    emailResponse: "",
                    passResponse: ""
                });
                setSubmitLoading(false)
            }
        }
    } catch (error) {
        console.log("Error while user login", error);
    }
};

  

  return (
    loading
    ?
    <div className="min-h-[100vh] flex justify-center items-center">
    <BounceLoader/>
  </div>
    :
    <div className="max-w-screen overflow-x-hidden flex justify-center items-center min-h-screen h-fit relative bg-fixed bg-no-repeat bg-center bg-cover 
    bg-[url('https://images.unsplash.com/photo-1644924604597-373500f4cf28?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
      {showSideBar && <SideBar />}
     
     
      <div
        className="bg-[rgba(1,1,1,0.15)] 
      text-white p-8 rounded-lg shadow-[0px_0px_10px_0px_red] w-full px-10  
      mx-auto max-w-sm backdrop-blur-[7px]"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="">
          <div className="mb-4">
            <label className="block  mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={admin.email || ""}
              onChange={handleChangeFunction}
              className="w-full px-3 py-2 border border-red-300  bg-[#93e0ff54]  rounded-lg 
            focus:outline-none focus:border-red-500 "
            />
            {validUser.emailResponse && (
              <p className="my-2 text-center font-bold text-[20px] text-[#00f8ff]">
                {validUser.emailResponse}
              </p>
            )}
          </div>
          <div className="mb-6">
            <label className="block mb-2">Password</label>
            {showPassword ? (
              <div
                className="w-full border border-red-300  pr-2 flex justify-between items-center bg-[#93e0ff54] rounded-lg 
         focus:outline-none focus:border-red-500"
              >
                <input
                  type="text"
                  name="password"
                  value={admin.password || ""}
                  onChange={handleChangeFunction}
                  className="bg-transparent h-full px-3 py-2
            focus:outline-none focus:border-red-500"
                />
                <FaEyeSlash
                  className="text-[25px] text-red-500"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              </div>
            ) : (
              <div
                className="w-full border border-red-300 pr-2 flex items-center justify-between bg-[#93e0ff54] rounded-lg 
            focus:outline-none focus:border-red-500"
              >
                <input
                  type="password"
                  name="password"
                  value={admin.password || ""}
                  onChange={handleChangeFunction}
                  className="bg-transparent h-full px-3 py-2
            focus:outline-none focus:border-red-500"
                />
                <FaEye
                  className="text-[25px] text-red-500"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              </div>
            )}
            {validUser.passResponse && (
              <p className="my-2 text-center font-bold text-[20px] text-[#00f8ff]">
                {validUser.passResponse}
              </p>
            )}
          </div>
          {
            submitLoading
            &&
            <div className="flex justify-center items-center py-2 my-2">
              <FadeLoader color="#ff0000" />
            </div>
          }

          <button
            className="bg-[rgb(255,0,0)] border-2 border-red-500 transition duration-150 ease-in px-3 py-1 hover:bg-transparent mx-auto text-[20px] rounded-md w-[70%] block"
            onClick={loginUserFunction}
          >
            Login
          </button>


          {allRequired && (
            <p className="my-3 text-center font-bold text-[20px] text-[#00f8ff]">
              All fields are required
            </p>
          )}

          
        </form>

       
      </div>
    </div>
  );
}

export default AdminLogin;














































// const loginUserFunction = async (e) => {
//   e.preventDefault();
//   console.log("clicked");
//   try {
//     const response = await fetch("http://localhost:10000/admin-login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//       body: JSON.stringify(admin),
//     });
//     const data = await response.json();
//     if(data.message ==="This admin email does't exists"){
//       setValidUser({
//           passResponse:"",
//           emailResponse:"This admin email does't exists"
//       })
//      return setAllRequired(false);
//     }else if(data.message === "Enter valid password"){
//      return setValidUser({
//           emailResponse:"",
//           passResponse:"Enter valid password"});
//     }else if(data.message === "All feilds Required"){
//       setAllRequired("All Feilds Required")
//       return setValidUser({
//           emailResponse:"",
//           passResponse:""
//       })
//     }
//    setAdmin(data.adminObj);
//   setAdmin({
//       ...admin,
//       isLogin:true
//   })
//    navigate("/adminDashboard")
//    toast("Admin Login Successfull")
//   } catch (error) {
//     console.log("Error while user login ", error);
//   }
// };
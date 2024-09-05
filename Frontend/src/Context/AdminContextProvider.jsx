import { createContext, useEffect, useState } from "react"

export const AdminContext=createContext();
// eslint-disable-next-line react/prop-types
function AdminContextProvider({children}) {
    const [admin,setAdmin]=useState(()=>{
        const adminDetails=JSON.parse(sessionStorage.getItem("admin_details"))
        return adminDetails ? adminDetails :  {
            email:"",
            password:"",
            isLogin:false
        }
    })
    useEffect(()=>{
      sessionStorage.setItem("admin_details",JSON.stringify(admin))
    },[admin])
  return (
    <AdminContext.Provider value={{admin,setAdmin}}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContextProvider
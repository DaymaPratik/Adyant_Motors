import Navbar from "./Components/Navbar"
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SideBarContextProvider from "./Context/SideBarContextProvider";

function App() {
  return (
    <>
    <BrowserRouter>
     <SideBarContextProvider>
     <Navbar/>
     
     <Routes>
      <Route element={<Homepage/>} path={"/"}/>
     </Routes>
     
     </SideBarContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App

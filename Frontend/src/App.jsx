import Navbar from "./Components/Navbar"
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import SideBarContextProvider from "./Context/SideBarContextProvider";
import ContactusPage from "./Pages/ContactusPage";
import CareersPage from "./Pages/CareersPage";
import AboutUsPage from "./Pages/AboutUsPage";
import LeadershipPage from "./Pages/LeadershipPage";
import CompaniesPage from "./Pages/CompaniesPage";
import BrandsPage from "./Pages/BrandsPage";
import ExportsPage from "./Pages/ExportsPage";
import GalleryPage from "./Pages/GalleryPage";
import HomeFooter from "./Components/HomeFooter";
import AdminLogin from "./Pages/AdminLogin";
import AdminContextProvider from "./Context/AdminContextProvider";
import AdminDashboardPage from "./Pages/AdminDashboardPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <BrowserRouter>
    <AdminContextProvider>
    <SideBarContextProvider>
     <Navbar/>
     <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
     <Routes>
      <Route element={<ContactusPage/>} path="/contact-us"/>
      <Route element={<Homepage/>} path={"/"}/>
      <Route element={<CareersPage/>} path="/careers"/>
      <Route element={<AboutUsPage/>} path="/about-us"/>
      <Route element={<ExportsPage/>} path="/exports"/>
      <Route element={<GalleryPage/>} path="/gallery"/>
      <Route element={<CompaniesPage/>} path="/about-us/companies"/>
      <Route element={<LeadershipPage/>} path="/about-us/leadership"/>
      <Route element={<BrandsPage/>} path="/about-us/brands"/>
      <Route element={<AdminLogin/>} path="/admin-login"/>
      <Route element={<AdminDashboardPage/>} path="/adminDashboard"/>
     </Routes>
     <HomeFooter/>
     </SideBarContextProvider>
    </AdminContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App

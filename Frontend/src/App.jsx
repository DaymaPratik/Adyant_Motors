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

function App() {
  return (
    <>
    <BrowserRouter>
     <SideBarContextProvider>
     <Navbar/>
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
     </Routes>
     <HomeFooter/>
     </SideBarContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App

import { useContext, useEffect } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import SideBar from "../Components/SideBar";
import HomeFooter from "../Components/HomeFooter";
import LeadershipHero from "../Components/LeaderShipComponents/LeadershipHero";
import LeaderShipMemberBox from "../Components/LeaderShipComponents/LeaderShipMemberBox";

function LeadershipPage() {
  const { showSideBar, setShowSideBar,setShowAboutUs } =
  useContext(SideBarContext);
useEffect(() => {
  setShowSideBar(false);
  setShowAboutUs(false)
}, []);
return (
  <div className="max-w-screen overflow-x-hidden relative">
    {showSideBar && <SideBar />}
    <LeadershipHero/>
    <LeaderShipMemberBox/>
    <HomeFooter />
  </div>
);
}

export default LeadershipPage
import { useContext, useEffect } from "react";
import { SideBarContext } from "../Context/SideBarContextProvider";
import SideBar from "../Components/SideBar";
import LeadershipHero from "../Components/LeaderShipComponents/LeadershipHero";
import LeaderShipMemberBox from "../Components/LeaderShipComponents/LeaderShipMemberBox";
import {BounceLoader} from "react-spinners"
function LeadershipPage() {
  const { showSideBar, setShowSideBar,setShowAboutUs,loading,setLoading } =
  useContext(SideBarContext);
useEffect(() => {
  window.scrollTo(0, 0);
  setShowSideBar(false);
  setShowAboutUs(false);
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
}, []);
return (
loading
?
<div className="min-h-[100vh] flex justify-center items-center">
<BounceLoader/>
</div>
:
<div className="max-w-screen overflow-x-hidden relative">
{showSideBar && <SideBar />}
<LeadershipHero/>
<LeaderShipMemberBox/>
</div>
);
}

export default LeadershipPage
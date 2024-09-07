import { createContext, useState } from 'react'
export const SideBarContext=createContext(false);
// eslint-disable-next-line react/prop-types
function SideBarContextProvider({children}) {
    const [showSideBar,setShowSideBar]=useState(false);
    const [showAboutUs,setShowAboutUs]=useState(false);
    const [aboutUsHover, setAboutUsHover] = useState(false);
    const [loading,setLoading]=useState(true);
  return (
    <SideBarContext.Provider value={{loading,setLoading,showSideBar,setShowSideBar,showAboutUs,setShowAboutUs, aboutUsHover, setAboutUsHover}}>
        {children}
    </SideBarContext.Provider>
  )
}

export default SideBarContextProvider
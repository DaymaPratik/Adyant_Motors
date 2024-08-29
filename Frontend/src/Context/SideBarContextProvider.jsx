import { createContext, useState } from 'react'
export const SideBarContext=createContext(false);
// eslint-disable-next-line react/prop-types
function SideBarContextProvider({children}) {
    const [showSideBar,setShowSideBar]=useState(false);
  return (
    <SideBarContext.Provider value={{showSideBar,setShowSideBar}}>
        {children}
    </SideBarContext.Provider>
  )
}

export default SideBarContextProvider
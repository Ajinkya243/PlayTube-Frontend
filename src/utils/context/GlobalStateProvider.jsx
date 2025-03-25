import { createContext, useContext, useState } from "react";

const GlobalStateContext=createContext();

const GlobalStateProvider=({children})=>{
    const[input,setInput]=useState();
    const[currentPage,setCurrentPage]=useState("All");
    
    return(
        <GlobalStateContext.Provider 
        value={{
            input,
            setInput,
            currentPage,
            setCurrentPage,
            // user,
            // setUser
        }}
        >
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState=()=>useContext(GlobalStateContext);
export default GlobalStateProvider;
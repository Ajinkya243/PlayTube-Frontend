import { createContext, useContext, useState } from "react";

const GlobalStateContext=createContext();

const GlobalStateProvider=({children})=>{
    const[input,setInput]=useState();

    return(
        <GlobalStateContext.Provider 
        value={{
            input,
            setInput
        }}
        >
            {children}
        </GlobalStateContext.Provider>
    )
}

export const useGlobalState=()=>useContext(GlobalStateContext);
export default GlobalStateProvider;
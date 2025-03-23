import { useEffect, useState } from "react"

const useDebounce=(value,delay=1000)=>{
    const[debounce,setDebounce]=useState(value);
    useEffect(()=>{
        const handler=setTimeout(()=>{
            setDebounce(value)
        },delay)
        return ()=>clearTimeout(handler);
    },[value])
    return debounce
}
export default useDebounce;
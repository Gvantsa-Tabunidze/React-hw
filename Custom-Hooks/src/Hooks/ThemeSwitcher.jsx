import { useEffect, useState } from "react"

const useLocalStorage =(key,fallback)=>{
const [val, setVal] = useState(()=>{
    const stored = localStorage.getItem(key)
    return stored !==null ? JSON.parse(stored) : fallback;
})

useEffect(()=> {
    localStorage.setItem(key, JSON.stringify(val))
}, [key, val])



return [val, setVal]
}

export default useLocalStorage
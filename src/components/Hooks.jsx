import React, { useEffect, useState } from "react";

export function useLocalStorage (key) {
    const [data, setData] = useState(()=>{
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : [] 
    })
    useEffect(()=>{
        window.localStorage.setItem(key, JSON.stringify(data))
    }, [key, data])
    return [data, setData]
}
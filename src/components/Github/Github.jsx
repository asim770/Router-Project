import React from "react";
import { useEffect,useCallback,useState } from "react";
export default function Github(){
    const [data,setData]= useState("")
    useEffect(()=>{
        fetch("https://api.github.com/users/asim770").
        then(response => response.json()).
        then(data =>{
            console.log(data)
            setData(data)
            
        })
    },[])
    return(
        
        <>
        <div className="text-2xl bg-gray-300 text-black text-center">Followers: {data.following}</div>
        <div className="hello">URL: {data.url}</div>
        </>
    )
}
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Register(){
    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    function enterName(e){
        const Name=e.target.value;
        setName(Name)
        console.log(name)
    }
    
    function enterNumber(e){
        const Number= e.target.value;
        setNumber(Number)
    }
    
    function enterEmail(e){
        const Email= e.target.value;
        setEmail(Email)
    }
    

    function enterPassword(e){
        const Password= e.target.value;
        setPassword(Password)
    }
    
    function storeCredentials(){
        localStorage.setItem("name",name)
        localStorage.setItem("number",number)
        localStorage.setItem("email",email)
        localStorage.setItem("password",password)
        navigate("");
    }

    return(
        <>
        <div>
            <h2 className="text-center">Register</h2>
            <input type="text" onChange={enterName} value={name} className="input"/>
            <input type="text" onChange={enterNumber} value={number} className="input"/>
            <input type="email" onChange={enterEmail} value={email} className="input"/>
            <input type="password" onChange={enterPassword} value={password} className="input"/>
            <button onClick={storeCredentials}>
                Submit
            </button>
        </div>
        
        </>
    )
}
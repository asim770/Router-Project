import React, { useState } from "react";

export default function Login(){
    const [mail,setMail]=useState("")
    const [pass,setPass]=useState("")
    function checkMail(e){
        setMail(e.target.value)
    }
    function checkPassword(e){
        setPass(e.target.value)
    }
    function checkCredentials(e){
        const Mail=localStorage.getItem("email")
        const Password=localStorage.getItem("password")
        if((mail===Mail)&&(pass===Password)){
            alert("LOGIN SUCCESSFULLY");
        }else{
            alert("Credentials not match");
        }
    }
    return(
        <>
        <h1 className="text-center">Login</h1>
        <input type="text" onChange={checkMail} className="input"/>
        <input type="text" onChange={checkPassword} className="input"/>
        <button onClick={checkCredentials}>Submit</button>
        </>
    )
}
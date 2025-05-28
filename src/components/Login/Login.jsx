import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const [mail,setMail]=useState("")
    const [pass,setPass]=useState("")
    const navigate=useNavigate()
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
        navigate("/")
    }
    return(
        <>
        <div className="flex items-center justify-center  bg-gray-100 border-style: solid border-gray-500 p-4">
            <div className="flex flex-col space-y-2 p-7 bg-amber-200 rounded-4xl shadow hover:shadow-lg transition duration-300">
                <h1 className="text-center">LOGIN</h1>
                <input type="text"  className="input" placeholder="Name"/>
                <input type="text" className="input" placeholder="Number"/>
                <input type="text" onChange={checkMail} className="input" placeholder="Email"/>
                <input type="text" onChange={checkPassword} className="input" placeholder="Password"/>
                <button onClick={checkCredentials}  className=" bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">Submit</button>
            </div>
        </div>
        
        </>
    )
}
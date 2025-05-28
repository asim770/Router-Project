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
        alert("Registration Successful")
        navigate("/");
    }

    return(
        <>
        <div className="flex items-center justify-center  bg-gray-100 border-style: solid border-gray-500 p-4">
            <div className="flex flex-col space-y-2 p-7 bg-amber-200 rounded-4xl shadow hover:shadow-lg transition duration-300">
                <h2 className="text-center">REGISTER</h2>
                
                <input type="text" onChange={enterName} value={name} className="input" placeholder="Name"/>
                <input type="text" onChange={enterNumber} value={number} className="input" placeholder="Number"/>
                <input type="email" onChange={enterEmail} value={email} className="input" placeholder="Email"/>
                <input type="password" onChange={enterPassword} value={password} className="input" placeholder="Password"/>
                <button onClick={storeCredentials} className=" bg-orange-700 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-orange-600 transition ease-in-out duration-300">
                    Submit
                </button>
            </div>
        </div>
        
        </>
    )
}
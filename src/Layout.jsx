import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import UserContextProvider from "./context/UserContextProvider";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <UserContextProvider>
            <Header />
            <Outlet />
            <Footer />
        </UserContextProvider>
        
        </>
    )
}
export default Layout
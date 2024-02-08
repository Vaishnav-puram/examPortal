import { NavLink,useNavigate} from "react-router-dom";
import {logoff,currFacultyName} from "../../services/User_Service";
import { useState } from "react";
// import Sidebar from "./Sidebar";
import "../../index.css"
function Navbar(){
    const navigate=useNavigate();
    const navigateToHome=()=>{
        navigate('/faculty-dashboard')
    }
    const handleLogout=()=>{
        logoff(); //clears the token, userdetails from local storage
    }
    let fname=currFacultyName();
    return(
        <>
             <ul>
                <span id="menu" style={{float:'left', marginRight:'30px'}} onClick={navigateToHome}>Home</span>
                {/* <NavLink to={'/admin-dashboard/menu'} id="menu">Menu</NavLink> */}
                <span id="registered" style={{float:'right', marginRight:'30px'}} to={'/signup'}>{fname.toUpperCase()}</span>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/'} onClick={handleLogout}>Logout</NavLink>   
            </ul>
        </>
    )
}
export default Navbar;
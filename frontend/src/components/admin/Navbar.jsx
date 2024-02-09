import { NavLink} from "react-router-dom";
import { getRole,logoff,getUserName} from "../../services/User_Service";
import { useState } from "react";
import Sidebar from "./Sidebar";
import "../../index.css"
import { GrLogout } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
function Navbar(){
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const toogleSidebar=()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }
    let role=getRole();
    const handleLogout=()=>{
        logoff(); //clears the token, userdetails from local storage
    }
     let uname=getUserName();
    console.log(role);
    return(
        <>
             <ul>
                <span id="menu" style={{float:'left', marginRight:'30px'}} onClick={toogleSidebar}><FiMenu style={{marginBottom:'5px',marginRight:'2px'}}/> Menu</span>
                {/* <NavLink to={'/admin-dashboard/menu'} id="menu">Menu</NavLink> */}
                <span id="registered" style={{float:'right', marginRight:'30px'}} to={'/signup'}>{uname}</span>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/signin'} onClick={handleLogout}>Logout <GrLogout style={{marginBottom:'5px',marginRight:'2px'}}/></NavLink>   
            </ul>
            {isSidebarOpen && <Sidebar/>}
        </>
    )
}
export default Navbar;
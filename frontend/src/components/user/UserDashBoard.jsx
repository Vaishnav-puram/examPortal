import Header from "../Header"
import { Outlet } from "react-router-dom";
import "../../index.css"
import Navbar from "./Navbar";
function UserDashBoard(){
    return(
        <>
            <Header/>
            <Navbar/>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'240px'}}>
                <Outlet/>
            </div>
        </>
    )
}

export default UserDashBoard;
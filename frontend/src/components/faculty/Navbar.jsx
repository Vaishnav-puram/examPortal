import { NavLink,useNavigate} from "react-router-dom";
import {logoff,currFacultyName} from "../../services/User_Service";
import { IoHome } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
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
                <span id="menu" style={{float:'left', marginRight:'30px'}} onClick={navigateToHome}><IoHome style={{marginBottom:'5px',marginRight:'2px'}}/>Home</span>
                <span id="registered" style={{float:'right', marginRight:'30px'}} to={'/signup'}>{fname.toUpperCase()}</span>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/'} onClick={handleLogout}>Logout <GrLogout style={{marginBottom:'5px',marginRight:'2px'}}/></NavLink>   
            </ul>
        </>
    )
}
export default Navbar;
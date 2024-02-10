import { NavLink} from "react-router-dom";
import { getRole,logoff,getUserName} from "../../services/User_Service";
import "../../index.css"
function Navbar2(){
    let role=getRole();
    const handleLogout=()=>{
        logoff(); //clears the token, userdetails from local storage
    }
     let uname=getUserName();
    console.log(role);
    return(
        <>
             <ul>
                <span id="registered" style={{float:'right', marginRight:'30px'}} to={'/signup'}>{uname}</span>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/signin'} onClick={handleLogout}>Logout</NavLink>   
            </ul>
        </>
    )
}
export default Navbar2;
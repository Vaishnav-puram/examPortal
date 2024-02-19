import { NavLink} from "react-router-dom";
import { getRole,logoff,getUserName,getRollno} from "../../services/User_Service";
import { useState,useEffect } from "react";
import { getImageFromRollno } from "../../services/User_Service";
import "../../index.css"
function Navbar2(){
    let [imageData, setImageData] = useState(null);

    let id = JSON.parse(localStorage.getItem('user')).rollno;
    useEffect(() => {
        const fetchImage = async () => {
            try {
                const res = await getImageFromRollno(id);
                console.log("response -->", res.data);
                setImageData(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        if (id) {
            fetchImage();
        }
    }, [id])
    let role=getRole();
    const handleLogout=()=>{
        logoff(); //clears the token, userdetails from local storage
    }
    let uname=getUserName();
    let rollno=getRollno();
    console.log(role);
    return(
        <>
            <img style={{width:'fit-content'}} src={`data:image/jpeg;base64,${imageData}`} height={'200px'}/>
             <ul>
                <span id="registered" style={{float:'right', marginRight:'30px'}} to={'/signup'}>{uname} ({rollno}) </span>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/'} onClick={handleLogout}>Logout</NavLink>   
            </ul>
        </>
    )
}
export default Navbar2;
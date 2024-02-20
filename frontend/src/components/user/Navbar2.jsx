import { NavLink } from "react-router-dom";
import { getRole, logoff, getUserName, getRollno } from "../../services/User_Service";
import { useState, useEffect } from "react";
import { getImageFromRollno } from "../../services/User_Service";
import "../../index.css"
import "./user.css"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Navbar2() {
    let [imageData, setImageData] = useState(null);
    const totalTimeInMinutes=20;
    let totalTimeInSeconds=totalTimeInMinutes*60;
    let [remainingTime,setRemainingTime]=useState(totalTimeInSeconds);

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

    useEffect(()=>{
        const timer=setInterval(()=>{
            setRemainingTime(prev=>prev-1)
            if(remainingTime==0){
                clearInterval(timer);
            }
        },1000)
        return ()=>clearInterval(timer);
    },[remainingTime])

    const minutes=Math.floor(remainingTime/60);
    const progressPercentage = (totalTimeInSeconds - remainingTime) / totalTimeInSeconds * 100;
    let role = getRole();
    const handleLogout = () => {
        logoff(); //clears the token, userdetails from local storage
    }
    let uname = getUserName();
    let rollno = getRollno();
    console.log(role);
    return (
        <>
            <img style={{ width: 'fit-content' }} src={`data:image/jpeg;base64,${imageData}`} height={'200px'} />
            <div style={{ position:'absolute',right:'25px',top:'22%',width: 140, height: 100 }}>
                <CircularProgressbar value={progressPercentage} text={`${minutes}m`}  counterClockwise={true} 
                    styles={buildStyles({
                        textColor:'#fff',
                        pathColor:'red',

                    })}
                />
            </div>
            <ul>
                <span id="registered" style={{ float: 'right', marginRight: '30px' }} to={'/signup'}>{uname} ({rollno}) </span>
                <NavLink id="loginBtn" style={{ float: 'right', marginRight: '20px' }} to={'/'} onClick={handleLogout}>Logout</NavLink>
            </ul>
        </>
    )
}
export default Navbar2;
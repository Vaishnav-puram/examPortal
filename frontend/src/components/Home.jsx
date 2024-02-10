import Header from "./Header";
import { NavLink } from "react-router-dom";
import "../index.css"
import { IoHome } from "react-icons/io5";
import { FiLogIn } from "react-icons/fi";
import { GoPersonAdd } from "react-icons/go";
function Home() {
    return (
        <>
            <Header />
            <ul>
                
                <li><IoHome style={{marginBottom:'5px',marginRight:'3px'}}/> Home</li>
                <li>About</li>
                <li>Contact</li>
                <NavLink id="signupBtn" style={{float:'right', marginRight:'30px'}} to={'/signup'}>SignUp <GoPersonAdd style={{marginBottom:'5px',marginLeft:'2px'}}/></NavLink>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/who'}>Login <FiLogIn style={{marginBottom:'5px',marginLeft:'2px'}}/></NavLink>
            </ul>
        </>
    )
}
export default Home;
import Header from "./Header";
import { NavLink } from "react-router-dom";
import "../index.css"
function Home() {
    return (
        <>
            <Header />
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <NavLink id="signupBtn" style={{float:'right', marginRight:'30px'}} to={'/signup'}>SignUp</NavLink>
                <NavLink id="loginBtn" style={{float:'right', marginRight:'20px'}} to={'/signin'}>Login</NavLink>
            </ul>
        </>
    )
}
export default Home;
import { currSubject } from "../../services/User_Service";
import Header from "../Header";
import Navbar from "./Navbar";
import QuizComponent from "./QuizComponent";
function FacultyDashBoard(){
    var subject=currSubject();
    return(
        <>
            <Header/>
            <Navbar/>
            <h3 style={{color:'white'}}>Welcome to Faculty page</h3>
            <h2 style={{color:'white'}}>Category :{subject} </h2>
            <QuizComponent/>
        </>
    )
}
export default FacultyDashBoard;
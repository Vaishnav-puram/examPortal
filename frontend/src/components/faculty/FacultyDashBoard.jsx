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
            <h3>Welcome to Faculty page</h3>
            <h2>Category :{subject} </h2>
            <QuizComponent/>
        </>
    )
}
export default FacultyDashBoard;
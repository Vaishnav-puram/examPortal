import { useEffect, useState } from "react";
import { getQuizzes } from "../../services/User_Service";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
function Quizzes() {
    const navigate=useNavigate();
    let [quizData, setQuizData] = useState([]);
    useEffect(() => {
        fetchQuizzes();
    }, [])
    const fetchQuizzes = async () => {
        try {
            const res = await getQuizzes();
            console.log(res.data);
            setQuizData(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    const handleQuestions=(e,qid)=>{
        e.preventDefault();
        navigate(`/admin-dashboard/questions/${qid}`)

    }
    return (
        <>
            <Table striped style={{fontSize:'medium',width:'1000px',marginTop:'40px',marginRight:'180px'}}>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Quiz Title</th>
                        <th>Max.Marks</th>
                        <th>No.Of Questions</th>
                        <th>Active</th>
                        <th colSpan={3} style={{textAlign:'center'}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {quizData.map((quiz) => (
                    <tr key={quiz.qid}>
                        <td>{quiz.category.title}</td>
                        <td>{quiz.title}</td>
                        <td>{quiz.maxMarks}</td>
                        <td>{quiz.noOfQuestions}</td>
                        <td>{quiz.active.toString()}</td>
                        <td><Button variant="outline-info" onClick={(e)=>handleQuestions(e,quiz.qid)}>Questions</Button></td>
                        <td><Button variant="outline-secondary">Update</Button></td>
                        <td><Button variant="outline-danger">Delete</Button></td>
                    </tr>
                ))}
                </tbody>
            </Table>

        </>
    )
}

export default Quizzes;
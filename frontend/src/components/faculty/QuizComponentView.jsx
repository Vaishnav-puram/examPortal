import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getQuizzesForFaculty } from '../../services/User_Service';
import { useState, useEffect } from 'react';
import './faculty.css';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
function QuizComponentView() {
    const navigate=useNavigate();
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        fetchQuizzes();
    }, []);
    const fetchQuizzes = async () => {
        try {
            const res = await getQuizzesForFaculty();
            console.log(res.data);
            setQuizzes(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    const handleQuestions=(e,qid)=>{
        e.preventDefault();
        navigate(`/faculty-dashboard/questions/${qid}`)

    }
    console.log("inside quizcomponent-->", quizzes)
    return (
        <>
            <div className='quizContent'>
            <Card style={{ width: '30rem',backgroundColor:'black',color:'white' }}>
                <Card.Header>Quizzes Available</Card.Header>
                <ListGroup variant="flush">
                    {quizzes.map(quiz => (
                        <ListGroup.Item className='quizText' key={quiz.qid} >{quiz.title}<Button variant="outline-info" onClick={(e)=>handleQuestions(e,quiz.qid)}>View Questions</Button></ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            </div>
        </>
    )
}
export default QuizComponentView;
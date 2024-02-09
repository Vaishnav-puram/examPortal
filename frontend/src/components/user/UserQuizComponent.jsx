import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { getQuizzesByCategory } from '../../services/User_Service';
import { useState, useEffect } from 'react';
import '../faculty/faculty.css';
import { IoIosAdd } from "react-icons/io";
import { NavLink, useParams } from 'react-router-dom';
function UserQuizComponent() {
    const {category}=useParams();
    console.log("-->",category);
    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        fetchQuizzes();
    }, [quizzes]);
    const fetchQuizzes = async () => {
        try {
            const res = await getQuizzesByCategory(category);
            console.log(res.data);
            setQuizzes(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    console.log("inside quizcomponent-->", quizzes)
    return (
        <>
            <div className='quizContent'>
            <Card style={{ width: '30rem',backgroundColor:'black',color:'white' }}>
                <Card.Header>Quizzes Available</Card.Header>
                <ListGroup variant="flush">
                    {quizzes.map(quiz => (
                        <ListGroup.Item className='quizText' key={quiz.qid} >{quiz.title} <NavLink to={`/faculty-dashboard/addQuestion/${quiz.qid}`}><IoIosAdd className='hover-text' style={{fontSize:'medium'}} /></NavLink></ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            </div>
        </>
    )
}
export default UserQuizComponent;
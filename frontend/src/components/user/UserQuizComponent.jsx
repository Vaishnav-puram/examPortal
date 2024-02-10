import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { getQuizzesByCategory } from '../../services/User_Service';
import { useState, useEffect } from 'react';
import '../faculty/faculty.css';
import { useParams } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Instructions from './Instructions';
import { useNavigate } from 'react-router-dom';
function UserQuizComponent() {
    const navigate=useNavigate();
    const { category } = useParams();
    console.log("-->", category);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [inputQuiz, setInputQuiz] = useState("");

    const [quizzes, setQuizzes] = useState([]);
    useEffect(() => {
        fetchQuizzes();
    }, [quizzes]);

    const goToQuestions=(e,qid)=>{
        e.preventDefault();
        navigate(`/user-dashboard/questionPaper/${qid}`)
    }
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
    let filteredQuizzes = quizzes.filter(({ title }) => {
        return title.indexOf(inputQuiz) >= 0
    })
        .map((quiz) => {
            return (
                <>
                    <Card key={quiz.qid}>
                        <Card.Header as="h3">{quiz.category.title}</Card.Header>
                        <Card.Body>
                            <Card.Title style={{ fontSize: 'medium' }}>{quiz.title}</Card.Title>
                            <Card.Text>
                                {quiz.description}
                            </Card.Text>
                            <Button variant="primary" onClick={handleShow}>View</Button>  <Button variant="outline-success" onClick={e=>goToQuestions(e,quiz.qid)}>Start</Button>
                            <Offcanvas show={show} onHide={handleClose} placement='top' style={{height:'400px'}}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title style={{fontSize:'large'}}>{quiz.title}</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Instructions key={quiz.qid} quiz={quiz}/>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                    </Card>
                </>
            )
        })
    return (
        <div style={{ marginRight: '105px' }}>
            <Form.Control className='searchBar' type="text" value={inputQuiz} placeholder="Search...." onChange={(e) => setInputQuiz(e.target.value)} />
            <div style={{ height: '20vh', display: 'grid', gridTemplateColumns: 'auto auto auto', gridGap: '20px', padding: '20px', fontSize: 'medium' }}>
                {filteredQuizzes}
            </div>
        </div>
    )
}
export default UserQuizComponent;
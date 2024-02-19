import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import { getQuizzes } from '../../services/User_Service';
import Form from 'react-bootstrap/Form';
import "./user.css"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Instructions from './Instructions';
import { useNavigate } from 'react-router-dom';
function ListOfQuizzes() {
    const navigate=useNavigate();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let [inputQuiz, setInputQuiz] = useState("");
    let [quizData, setQuizData] = useState([]);
    useEffect(() => {
        fetchQuizzes();
    }, [])
    const goToQuestions=(e,qid)=>{
        e.preventDefault();
        navigate(`/user-dashboard/questionPaper/${qid}`)
    }
    const fetchQuizzes = async () => {
        try {
            const res = await getQuizzes();
            console.log(res.data);
            setQuizData(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    let filteredQuizzes = quizData.filter(({ title }) => {
        return title.indexOf(inputQuiz) >= 0
    })
        .map((quiz) => {
            return (
                <>
                    <Card key={quiz.qid} className='quizCard'>
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
                                    <Instructions quiz={quiz}/>
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
            <div className='listOfQuizzes'>
                {filteredQuizzes}
            </div>
        </div>
    )
}

export default ListOfQuizzes;
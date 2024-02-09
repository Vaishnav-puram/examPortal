import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState,useEffect } from 'react';
import { getQuizzes } from '../../services/User_Service';
function ListOfQuizzes() {
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
    return (
        <>
            <div style={{ height: '90vh', display: 'grid', gridTemplateColumns: 'auto auto auto', gridGap: '20px', padding: '20px',fontSize:'medium'}}>
            {quizData.map((quiz)=>(
                <Card key={quiz.qid}>
                <Card.Header as="h3">{quiz.category.title}</Card.Header>
                <Card.Body>
                    <Card.Title style={{fontSize:'medium'}}>{quiz.title}</Card.Title>
                    <Card.Text>
                       {quiz.description}
                    </Card.Text>
                    <Card.Text style={{color:'red'}}>
                       Max.marks : {quiz.maxMarks}
                    </Card.Text>
                    <Card.Text style={{color:'red'}}>
                      No.of Questions : {quiz.noOfQuestions}
                    </Card.Text>
                    <Button variant="primary">View</Button>  <Button variant="outline-success">Start</Button>
                </Card.Body>
            </Card>
            ))}
            </div>
        </>
    )
}

export default ListOfQuizzes;
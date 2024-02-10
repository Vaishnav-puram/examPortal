import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams,useNavigate } from 'react-router-dom';
import { getQuestions, getResults } from '../../services/User_Service';
import Form from 'react-bootstrap/Form';
import "./user.css"
import Header from '../Header';
import Navbar2 from './Navbar2';
function QuestionPaper() {
    const { qid } = useParams();
    const navigate=useNavigate();
    let [questionData, setQuestionData] = useState([]);
    useEffect(() => {
        fetchQuestions();
    }, [qid])
    const fetchQuestions = async () => {
        try {
            const res = await getQuestions(qid);
            console.log("questions-->", res.data);
            res.data.forEach((question)=>{
                question["givenAnswer"]=""
            })
            setQuestionData(res.data);
        } catch (err) {
            console.log(err);
        }
    }
    console.log("new questions--> " ,questionData);

    const handleSelected = (queId, selectedOption) => {
        console.log("selected question --> ",queId);
        console.log("selected option-->",selectedOption);
        const updatedQuestions=questionData.map((question)=>{
            if(question.queId===queId){
                console.log("matched-->",queId);
                return{
                    ...question,
                    givenAnswer:selectedOption
                };
            }
            return question;
        });
        setQuestionData(updatedQuestions);
    };
    const handleResults=async (e)=>{
        console.log("inside questionpaper --> ",questionData);
        e.preventDefault();
        try{
            const result=await getResults(questionData);
            console.log(result.data);
        }catch(err){
            console.log(err);
        }
        // navigate(`/user-dahboard/results/${qid}`);
    }
    return (
        <>
            <Header />
            <Navbar2 />
            <div className='gridContainer'>
                <div className='item-1'>
                    <div className='innerGridComponent'>
                        {questionData.map((question,index1)=>(
                            <div className='box' key={question.queId}><a style={{textDecoration:'none',color:'black'}} href={`#${index1}`}>{++index1}</a></div>
                        ))}
                    </div>
                </div>
                <div className='item-2'>
                    {questionData.map((question,index) => (
                        <div key={question.queId} style={{ marginBottom: '30px', boxShadow: ' 10px 10px 15px grey' }}>
                            <Card>
                                <Card.Header id={index}><b>{++index} ) </b>{question.content}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <Form style={{ fontWeight: 'normal' }}>
                                            <Form.Check type='radio' name='opt' value={question.option_1} id='option_1' label={question.option_1} onChange={()=>handleSelected(question.queId,question.option_1)}/>
                                            <Form.Check type='radio' name='opt' value={question.option_2} id='option_2' label={question.option_2} onChange={()=>handleSelected(question.queId,question.option_2)}/>
                                            <Form.Check type='radio' name='opt' value={question.option_3} id='option_3' label={question.option_3} onChange={()=>handleSelected(question.queId,question.option_3)}/>
                                            <Form.Check type='radio' name='opt' value={question.option_4} id='option_4' label={question.option_4} onChange={()=>handleSelected(question.queId,question.option_4)}/>
                                        </Form>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <div>
                    </div>
                    <Button className='questionSubmit' variant="outline-success" onClick={handleResults}>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default QuestionPaper;
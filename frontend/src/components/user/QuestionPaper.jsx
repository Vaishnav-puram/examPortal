import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams,useNavigate } from 'react-router-dom';
import { getImageFromQuestion, getQuestions, getResults } from '../../services/User_Service';
import Form from 'react-bootstrap/Form';
import "./user.css"
import Header from '../Header';
import Navbar2 from './Navbar2';
function QuestionPaper() {
    const { qid } = useParams();
    const navigate=useNavigate();
    let id = JSON.parse(localStorage.getItem('user')).rollno;
    let [questionData, setQuestionData] = useState([]);
    useEffect(() => {
        fetchQuestions();
    }, [])
    const fetchQuestions = async () => {
        try {
            const res = await getQuestions(qid);
            console.log("questions-->", res.data);
            res.data.forEach(async(question)=>{
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
    const handleIndexColor=(index1)=>{
        console.log("inside handle color --> ",index1);
        document.getElementsByClassName(index1)[0].style.backgroundColor='green';
    }
    const handleResults=async (e)=>{
        console.log("inside questionpaper --> ",questionData);
        e.preventDefault();
        try{
            const result=await getResults(questionData,id);
            console.log(result.data);
        }catch(err){
            console.log(err);
        }
        navigate("/user-dashboard/results");
    }
    return (
        <>
            <Header />
            <Navbar2 />
            <div className='gridContainer'>
                <div className='item-1'>
                    <div className='innerGridComponent'>
                        {questionData.map((question,index1)=>{
                            console.log("inside index --> ",index1);
                            var idx=index1+1;
                        return (
                            <a className={idx} style={{textDecoration:'none',color:'black'}} href={`#${index1}`} key={question.queId}><div className='box' >{++index1}</div></a>
                        );
                        })}
                    </div>
                </div>
                <div className='item-2'>
                    {questionData.map((question,index) => (
                        <div className='question' key={question.queId} style={{ marginBottom: '30px', boxShadow: ' 10px 10px 15px grey' }}>
                            <Card>
                                <Card.Header id={index}><b>{++index} ) </b>{question.content}</Card.Header>
                                <Card.Body>
                                {question.image &&(<img src={`data:image/jpeg;base64,${question.image}`} />)}
                                    <Card.Text>
                                        <Form className='options' style={{ fontWeight: 'normal' }}>
                                            <div className='parent_OPT1'><Form.Check className='opt1' type='radio' name='opt' value={question.option_1} id='option_1' label={question.option_1} onChange={()=>{handleSelected(question.queId,question.option_1);handleIndexColor(index)}}/></div>
                                            <div className='parent_OPT2'><Form.Check className='opt2' type='radio' name='opt' value={question.option_2} id='option_2' label={question.option_2} onChange={()=>{handleSelected(question.queId,question.option_2);handleIndexColor(index)}}/></div>
                                            <div className='parent_OPT3'><Form.Check className='opt3' type='radio' name='opt' value={question.option_3} id='option_3' label={question.option_3} onChange={()=>{handleSelected(question.queId,question.option_3);handleIndexColor(index)}}/></div>
                                            <div className='parent_OPT4'><Form.Check className='opt4' type='radio' name='opt' value={question.option_4} id='option_4' label={question.option_4} onChange={()=>{handleSelected(question.queId,question.option_4);handleIndexColor(index)}}/></div>
                                        </Form>
                                        <Button className='clearBtn'>Clear answer</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                    <div>
                <Button className='questionSubmit' variant="outline-success" onClick={handleResults}>Submit</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuestionPaper;
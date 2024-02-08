import Header from "../Header";
import Navbar from "./Navbar";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams ,useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";
import { axiosFacultyService } from "../../services/Helper";
import {getFacultyToken} from "../../services/User_Service";
function AddQuestion(){
    const navigate=useNavigate();
    const {qid}=useParams();
    let [questionData,setQuestionData]=useState({
        content: "",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        answer: "",
        quiz: {
            qid: qid
        }
    })
    useEffect(()=>{
        console.log(questionData);
    },[questionData])
    const handleChange = (event, property) => {
        setQuestionData({ ...questionData, [property]: event.target.value });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        axiosFacultyService.post('/addQuestion',questionData,{
             headers: {
            'Authorization': `Bearer ${getFacultyToken().token}`,
          }
        }).then((res)=>{
            console.log("response --> ",res.data);
        }).catch((err)=>{
            console.log(err);
        })
        navigate('/faculty-dashboard')
    }
    return(
        <>
            <Header/>
            <Navbar/>
            <Container style={{ width: '550px', fontSize: 'medium', border: '20%' }}>
                <Card border="primary">
                    <CardHeader style={{ backgroundColor: '#CCD0D5' }}>
                        <h3>Add Question</h3>
                    </CardHeader>
                    <CardBody style={{ color: 'black' }}>
                        <Form onSubmit={handleSubmit} autoComplete="on">
                            <FormGroup>
                                <Form.Label>Quiz_Id</Form.Label>
                                <Form.Control id="qid" type="text" placeholder="Enter Question" name="qid" value={qid} disabled="true"/><br />
                                <Form.Label>Question</Form.Label>
                                <Form.Control id="content" type="text" placeholder="Enter Question" name="content" value={questionData.content} onChange={(e)=>handleChange(e,'content')} />
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Option_1</Form.Label>
                                <Form.Control id="option_1" type="text" placeholder="Enter Option 1" name="option_1" value={questionData.option_1} onChange={(e)=>handleChange(e,'option_1')}/>
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Option_2</Form.Label>
                                <Form.Control id="option_2" type="text" placeholder="Enter Option 2" name="option_2" value={questionData.option_2} onChange={(e)=>handleChange(e,'option_2')}/>
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Option_3</Form.Label>
                                <Form.Control id="option_3" type="text" placeholder="Enter Option 3" name="option_3" value={questionData.option_3} onChange={(e)=>handleChange(e,'option_3')} />
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Option_4</Form.Label>
                                <Form.Control id="option_4" type="text" placeholder="Enter Option 4" name="option_4" value={questionData.option_4} onChange={(e)=>handleChange(e,'option_4')}/>
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Answer</Form.Label>
                                <Form.Control id="answer" type="text" placeholder="Enter answer" name="answer" value={questionData.answer} onChange={(e)=>handleChange(e,'answer')} />
                                <br />
                            </FormGroup>
                            <Container className="text-center">
                                <Button type="submit" variant="dark" style={{ fontSize: 'medium' }} value={"Submit"}>Add</Button>
                                <Button variant="secondary" style={{ fontSize: 'medium' }} value={"Reset"}>Reset</Button>

                            </Container>
                        </Form>
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}
export default AddQuestion;
import Header from "../Header";
import Navbar from "./Navbar";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";
import { addQuiz } from "../../services/User_Service";

function AddQuiz(){
    const navigate=useNavigate();
    const {cid}=useParams();
    let [quizData,setQuizData]=useState({
        title:"",
        description:"",
        maxMarks:"",
        noOfQuestions:"",
        category:{
            cid: cid
        }
    })
    const handleChange=(event,property)=>{
        setQuizData({...quizData,[property]:event.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addQuiz(quizData);
        navigate('/admin-dashboard/categoriesForQuiz');
    }
    return(
        <>
            <Header/>
            <Navbar/>
            <Container style={{ width: '550px', fontSize: 'medium', border: '20%' }}>
                <Card border="primary">
                    <CardHeader style={{ backgroundColor: '#CCD0D5' }}>
                        <h3>Add Quiz</h3>
                    </CardHeader>
                    <CardBody style={{ color: 'black' }}>
                        <Form onSubmit={handleSubmit} autoComplete="on">
                            <FormGroup>
                                <Form.Label>Category_Id</Form.Label>
                                <Form.Control id="cid" type="text"  name="cid" value={cid} disabled="true"/><br />
                                <Form.Label>Title</Form.Label>
                                <Form.Control id="title" type="text" placeholder="Enter title" name="title" value={quizData.title} onChange={(e)=>handleChange(e,'title')} />
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Description</Form.Label>
                                <Form.Control id="description" type="text" placeholder="Enter description" name="description" value={quizData.description} onChange={(e)=>handleChange(e,'description')}/>
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Max Marks</Form.Label>
                                <Form.Control id="maxMarks" type="text" placeholder="Enter maxMarks" name="maxMarks" value={quizData.maxMarks} onChange={(e)=>handleChange(e,'maxMarks')}/>
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>No.OfQuestions</Form.Label>
                                <Form.Control id="noOfQuestions" type="text" placeholder="Enter noOfQuestions" name="noOfQuestions" value={quizData.noOfQuestions} onChange={(e)=>handleChange(e,'noOfQuestions')} />
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
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

export default AddQuiz;
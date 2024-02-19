import Header from "../Header";
import Navbar from "./Navbar";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import { sendMail } from "../../services/User_Service";
import { toast } from 'react-toastify';
function MailToStudents(){

    const [mailBodies, setMailBodies] = useState([
        { 
            to: "", 
            body: "" 
        }
    ]);
    const [body,setBody]=useState("");
    useEffect(()=>{
        console.log(mailBodies);
    },[mailBodies])
    const handleInput=(event,index,property)=>{
        const updatedMailBodies = [...mailBodies];
        updatedMailBodies[index][property] = event.target.value;
        setMailBodies(updatedMailBodies);
    }
    const addEmailField=()=>{
        setMailBodies([...mailBodies,{
            to:"",
            body:""
        }])
    }
    const handleBody=(event)=>{
        const newBody=event.target.value;
        setBody(newBody);
        const updatedMailBodies=mailBodies.map((mailBody)=>({...mailBody,body:newBody}));
        setMailBodies(updatedMailBodies);
    }
    const handleSendMail=async(e)=>{
        e.preventDefault();
        try{
            const res=await sendMail(mailBodies);
            console.log(res.data);
            toast.success("mail sent successfully");
        }catch(err){
            console.log(err);
            toast.error("unable to send mail error occurred!")
        }
        setMailBodies([{
            to:"",
            body:""
        }])
    }
    return(
        <div style={{color:'white'}}>
        <Header/>
        <Navbar/>
            <Container style={{ width: '550px', fontSize: 'medium' }}>
                <Card>
                    <CardHeader>
                        <h3>Mail to students</h3>
                    </CardHeader>
                    <CardBody>
                        <Form>
                        {mailBodies.map((mailBody,index)=>(
                            <FormGroup key={index}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" type="text" placeholder="Enter email" value={mailBody.to} style={{ fontSize: 'medium' }} onChange={(e)=>handleInput(e,index,'to')}/>
                            </FormGroup>
                            
                        ))}
                        <Form.Label>Text</Form.Label>
                        <Form.Control as='textarea' id="body" type="text" placeholder="Enter text" value={body} style={{ fontSize: 'medium', height:'100px' }} onChange={handleBody} />
                        <Button variant="outline-success" onClick={addEmailField}>Add email</Button>

                            <Container className="text-center">
                                <Button type="submit" variant="dark" style={{ fontSize: 'medium' }} onClick={handleSendMail}>Send</Button>
                            </Container>
                        </Form>
                    </CardBody>

                </Card>

            </Container>

        </div>
    )
}

export default MailToStudents;
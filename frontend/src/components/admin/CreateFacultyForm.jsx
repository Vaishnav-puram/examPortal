import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { axiosService } from "../../services/Helper";
import { getToken } from "../../services/User_Service";
import { useNavigate } from "react-router-dom";
function CreateFacultyForm(){
    const navigate=useNavigate();
    let [facultyData,setFacultyData]=useState({
        name:"",
        password:"",
        email:"",
        subject:""
    })
    const handleChange = (event, property) => {
        setFacultyData({ ...facultyData, [property]: event.target.value });
        console.log(facultyData);
    }
    const create=async (e)=>{
        e.preventDefault();
        try{
            const res=await axiosService.post('createFaculty',facultyData,{
                headers: {
               'Authorization': `Bearer ${getToken().token}`,
             }
           })
           console.log(res.data);
           navigate('/admin-dashboard');
        }catch(err){
            console.log(err);
        }
    }

    return(
        <>
            <Container style={{ width: '550px', fontSize: 'medium' }}>
                <Card>
                    <CardHeader>
                        <h3>Create Faculty</h3>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup>
                                <Form.Label>Name</Form.Label>
                                <Form.Control id="rollno" type="text" placeholder="Enter name" style={{ fontSize: 'small' }} value={facultyData.name} onChange={(e) => handleChange(e, 'name')} />
                                <Form.Label>Password</Form.Label>
                                <Form.Control id="pass" type="password" placeholder="Enter password" style={{ fontSize: 'small' }} value={facultyData.password} onChange={(e) => handleChange(e, 'password')} />
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" type="mail" placeholder="Enter email" style={{ fontSize: 'small' }} value={facultyData.email} onChange={(e) => handleChange(e, 'email')} />
                                <Form.Label>Subject</Form.Label>
                                <Form.Control id="subject" type="text" placeholder="Enter subject" style={{ fontSize: 'small' }} value={facultyData.subject} onChange={(e) => handleChange(e, 'subject')} />
                            </FormGroup>

                            <Container className="text-center">
                                <Button type="submit" variant="dark" style={{ fontSize: 'medium' }} onClick={create} >Create</Button>
                               
                            </Container>
                        </Form>
                    </CardBody>

                </Card>

            </Container>
        </>
    )
}

export default CreateFacultyForm;
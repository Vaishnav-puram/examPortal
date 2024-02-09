import Header from "../Header";
import Navbar from "./Navbar";
import { CardBody, Container, FormGroup } from "reactstrap";
import { Card, CardHeader } from "reactstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../services/User_Service";
function AddCategory(){
    const navigate=useNavigate();
    let [categoryData,setCategoryData]=useState({
        title:"",
        description:""
    })
    const handleChange=(event,property)=>{
        setCategoryData({...categoryData,[property]:event.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addCategory(categoryData);
        navigate('/admin-dashboard/categories')
    }
    return(
        <>
            <Header/>
            <Navbar/>
            <Container style={{ width: '550px', fontSize: 'medium', border: '20%' }}>
                <Card border="primary">
                    <CardHeader style={{ backgroundColor: '#CCD0D5' }}>
                        <h3>Add Category</h3>
                    </CardHeader>
                    <CardBody style={{ color: 'black' }}>
                        <Form onSubmit={handleSubmit} autoComplete="on">
                            <FormGroup>
                                
                                <Form.Label>Title</Form.Label>
                                <Form.Control id="title" type="text" placeholder="Enter Title" name="title" value={categoryData.title} onChange={(e)=>handleChange(e,'title')} style={{fontSize: 'medium' }}/>
                                <span style={{ color: 'red', fontSize: 'small' }}></span><br />
                                <Form.Label>Description</Form.Label>
                                <Form.Control id="description" type="text" placeholder="Enter description" name="description" value={categoryData.description} onChange={(e)=>handleChange(e,'description')} style={{fontSize: 'medium' }}/>
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
export default AddCategory;
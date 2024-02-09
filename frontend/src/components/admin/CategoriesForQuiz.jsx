import { useEffect, useState } from "react";
import { getCategories,deleteCategory } from "../../services/User_Service";
import './category.css';
import { IoIosAdd } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function CategoriesForQuiz(){
    let [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetchCategories();
    },[])

    const fetchCategories=async ()=>{
           try{
                const res=await getCategories();
                console.log(res.data);
                setCategories(res.data);
           }catch(err){
            console.log(err);
           }
    }
    return(
        <>
            <div className='categoryContent'>
            <Card style={{ width: '40rem',backgroundColor:'black',color:'white' }}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'large'}}>
                <Card.Header>Add Quizzes for the categories available</Card.Header>
                </div>
                <ListGroup >
                    {categories.map(category => (
                        <ListGroup.Item className='categoryText' key={category.cid} >{category.title} 
                            <div className="btns"> 
                            <NavLink to={`/admin-dashboard/addQuiz/${category.cid}`}><IoIosAdd className='hover-text' style={{fontSize:'large',marginRight:'12px',color:'black'}} /></NavLink>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            </div>
        </>
    )
}
export default CategoriesForQuiz;
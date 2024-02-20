import { useEffect, useState } from "react";
import { getCategories,deleteCategory } from "../../services/User_Service";
import './category.css';
import { IoIosAdd } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
function Categories(){
    let [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetchCategories();
    },[categories])

    const fetchCategories=async ()=>{
           try{
                const res=await getCategories();
                console.log(res.data);
                setCategories(res.data);
           }catch(err){
            console.log(err);
           }
    }
    const delCategory=(e,cid)=>{
        e.preventDefault();
        deleteCategory(cid)
    }
    return(
        <>
            <div className='categoryContent'>
            <Card style={{ width: '40rem',backgroundColor:'black',color:'white' }}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'large'}}>
                <Card.Header>Categories Available</Card.Header>
                <NavLink to={`/admin-dashboard/addCategory`}><IoIosAdd className='hover-text' style={{fontSize:'large',marginRight:'12px',backgroundColor:'black',color:'white'}} /></NavLink>
                </div>
                <ListGroup >
                    {categories.map(category => (
                        <ListGroup.Item className='categoryText' key={category.cid} >{category.title} 
                            <div className="btns"> 
                            <MdOutlineDelete style={{fontSize:'large',color:'red'}} onClick={(e)=>delCategory(e,category.cid)}  />
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            </div>
        </>
    )
}
export default Categories;
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink} from "react-router-dom";
import { useState,useEffect } from 'react';
import { getCategories } from '../../services/User_Service';
import { IoIosSend } from "react-icons/io";
function Sidebar() {
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
    return (
        <>
            <div style={{height: '90vh',position:'absolute'}}>
                <CDBSidebar maxWidth='345px' textColor="#fff" backgroundColor="#333">
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink to={'/faculty-dashboard'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/faculty-dashboard/mail'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><IoIosSend/> Notify Students</CDBSidebarMenuItem>
                            </NavLink>
                            {categories.map((category)=>(
                                <NavLink to={`/user-dashboard/quizzes/${category.title}`} key={category.cid} activeClassName="activeClicked">
                                <CDBSidebarMenuItem>{category.title}</CDBSidebarMenuItem>
                                </NavLink>
                            ))}
                            
                        </CDBSidebarMenu>
                        
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    )
}

export default Sidebar;
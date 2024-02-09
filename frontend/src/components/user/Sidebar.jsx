import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink} from "react-router-dom";
import { useState,useEffect } from 'react';
import { getCategories } from '../../services/User_Service';
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
                            <NavLink to={'/user-dashboard/user-home'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/user-dashboard/profile'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
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
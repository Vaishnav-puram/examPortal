import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink} from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
function Sidebar() {
    return (
        <>
            <div style={{height: '90vh',position:'absolute'}}>
                <CDBSidebar maxWidth='210px' textColor="#fff" backgroundColor="#333">
                    <CDBSidebarContent >
                        <CDBSidebarMenu>
                            <NavLink to={'/admin-dashboard/admin-home'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/admin-dashboard/profile'} ClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                            </NavLink> 
                            <NavLink to={'/admin-dashboard/categories'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><BiCategory /> Categories</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/admin-dashboard/categoriesForQuiz'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><BsBookHalf /> Add Quiz</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/admin-dashboard/getQuizzes'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><BsBoxes /> Quizzes</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                        
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    )
}

export default Sidebar;
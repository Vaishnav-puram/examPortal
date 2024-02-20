import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink} from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { IoBookSharp } from "react-icons/io5";
function Sidebar() {
    return (
        <>
            <div style={{height: '90vh',position:'absolute'}}>
                <CDBSidebar maxWidth='345px' textColor="#fff" backgroundColor="#333">
                    <CDBSidebarContent>
                        <CDBSidebarMenu>
                            <NavLink to={'/faculty-dashboard/quizzes'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/faculty-dashboard/mail'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><IoIosSend/> Notify Students</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/faculty-dashboard/quizComponentView'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem><IoBookSharp /> View Questions</CDBSidebarMenuItem>
                            </NavLink>
                            
                            
                        </CDBSidebarMenu>
                        
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    )
}

export default Sidebar;
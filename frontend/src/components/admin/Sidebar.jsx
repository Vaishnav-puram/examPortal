import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink} from "react-router-dom";
function Sidebar() {
    return (
        <>
            <div style={{height: '100vh',position:'absolute'}}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
                    <CDBSidebarContent >
                        <CDBSidebarMenu>
                            <NavLink to={'/admin-dashboard/admin-home'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/admin-dashboard/profile'} ClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/tables" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="gear"><i className="bi bi-gear-wide-connected"></i>Category</CDBSidebarMenuItem>
                            </NavLink>
                            
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Add Category</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle">Quizzes</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle">Add Quiz</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                        
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    )
}

export default Sidebar;
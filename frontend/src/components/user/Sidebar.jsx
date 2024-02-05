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
                            <NavLink to={'/user-dashboard/user-home'} activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink to={'/user-dashboard/profile'} ClassName="activeClicked">
                                <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
                            </NavLink>
                            <NavLink exact to="/tables" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="table">Tables</CDBSidebarMenuItem>
                            </NavLink>
                            
                            <NavLink exact to="/analytics" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
                            </NavLink>

                            <NavLink exact to="/hero404" target="_blank" activeClassName="activeClicked">
                                <CDBSidebarMenuItem icon="exclamation-circle">404 page</CDBSidebarMenuItem>
                            </NavLink>
                        </CDBSidebarMenu>
                        
                    </CDBSidebarContent>
                </CDBSidebar>
            </div>
        </>
    )
}

export default Sidebar;
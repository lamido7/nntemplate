import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNav = () => {
    const navStyle = {
        width: '250px',
        height: '100vh',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '100px 0',
        boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const linkStyle = {
        display: 'block',
        color: 'white',
        padding: '12px 20px',
        marginBottom: '20px',
        textDecoration: 'none',
        fontSize: '16px',
        transition: 'all 0.3s ease'
    };

    const activeStyle = {
        backgroundColor: '#34495e',
        transform: 'translateX(5px)'
    };

    const liStyle = {
        padding: '15px'
    };

    return (
        <nav style={navStyle}>
            <h3 style={{padding: '10px 20px 20px 25px', margin: 0}}>Nigerian Navy Retirement Portal</h3>
            <ul style={{listStyle: 'none', padding: 0, margin: 0, flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <li style={liStyle}>
                    <NavLink 
                        to="/" 
                        style={linkStyle}
                        activeStyle={activeStyle}
                        exact
                    >
                       Dashboard
                    </NavLink>
                </li>
                <li style={liStyle}>
                    <NavLink 
                        to="/status-tracker" 
                        style={linkStyle}
                        activeStyle={activeStyle}
                    >
                       Status Tracker
                    </NavLink>
                </li>
                <li style={liStyle}>
                    <NavLink 
                        to="/request-form" 
                        style={linkStyle}
                        activeStyle={activeStyle}
                    >
                       Retirement Forms
                    </NavLink>
                </li>
                <li style={liStyle}>
                    <NavLink 
                        to="/notifications" 
                        style={linkStyle}
                        activeStyle={activeStyle}
                    >
                       Notifications
                    </NavLink>
                </li>
                
                <li style={liStyle}>
                    <NavLink 
                        to="/logout" 
                        style={linkStyle}
                        activeStyle={activeStyle}
                    >
                       Logout
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;

import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { IconButton } from '@material-ui/core';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <SearchIcon className="sidebar-search-icon"/>
                    <input className="search-input" placeholder="search"></input>
                </div>
                <IconButton variant="outlined" id="sidebar-button">
                    <BorderColorOutlinedIcon />
                </IconButton>
                <div className="sidebar-threads">
                    
                </div>
                <div className="sidebar-bottom">

                </div>
            </div>
        </div>
    );
}

export default Sidebar;

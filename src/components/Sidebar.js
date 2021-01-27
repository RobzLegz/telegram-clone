import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import { Avatar, IconButton } from '@material-ui/core';
import SidebarThread from './SidebarThread';
import { PhoneOutlined, QuestionAnswer, Settings } from '@material-ui/icons';

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
            </div>
            <div className="sidebar-threads">
                <SidebarThread />
            </div>
            <div className="sidebar-bottom">
                <Avatar className="sidebar-bottom-avatar" />
                <IconButton>
                    <PhoneOutlined />
                </IconButton>
                <IconButton>
                    <QuestionAnswer />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
            </div>
        </div>
    );
}

export default Sidebar;

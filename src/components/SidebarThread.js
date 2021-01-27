import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarThread.css";

const SidebarThreads = () => {
    return (
        <div className="sidebarThread">
            <Avatar />
            <h3>ThreadName</h3>
            <p>Message info</p>
            <small>timestamp</small>
        </div>
    )
}

export default SidebarThreads

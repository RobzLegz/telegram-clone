import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarThread.css";

const SidebarThreads = () => {
    return (
        <div className="sidebar-thread">
            <Avatar />
            <div className="thread-detail">
                <h3>ThreadName</h3>
                <p>Message info</p>
                <small className="thread-timestamp">timestamp</small>
            </div>
        </div>
    )
}

export default SidebarThreads

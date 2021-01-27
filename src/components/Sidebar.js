import React from 'react';
import "./Sidebar.css";
import SearchIcon from '@material-ui/icons/Search';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-search">
                    <SearchIcon className="sidebar-search-icon"/>
                    <input className="search-input" placeholder="search"></input>
                </div>
                <div className="sidebar-threads">
                    
                </div>
                <div className="sidebar-bottom">

                </div>
            </div>
        </div>
    );
}

export default Sidebar;

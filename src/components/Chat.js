import { Avatar, IconButton } from '@material-ui/core';
import { MoreHoriz } from '@material-ui/icons';
import React from 'react';
import "./Chat.css";

const Chat = () => {

    const sendMessage = e => {
        e.preventDefault();
    }

    return (
        <div className="chat">
            <div className="chat-header">
                <div className="chat-header-contents">
                    <Avatar />
                    <div className="contents-info">
                        <h4>Chat Name</h4>
                        <h5>Last seen....</h5>
                    </div>
                </div>
                <IconButton>
                    <MoreHoriz className="header-details" />
                </IconButton> 
            </div>           
            <div className="chat-container">
                <div className="message-inputs">
                    <form>
                        <input type="text" placeholder="Write a message"/>
                        <button onClick={sendMessage} className="send-message">Sendmessage</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat

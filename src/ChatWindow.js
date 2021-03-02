import React, { Component } from 'react';
import MessageHistory from './MessageHistory';
import ComposeMessage from './ComposeMessage';

class ChatWindow extends Component {
  
  render() {
    const { user, messages, handleMessageSend } = this.props
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
          <MessageHistory user={user} messages={messages}/>
        <div>
          <ComposeMessage user={user} handleMessageSend={handleMessageSend}/>
        </div>
      </div>
    )
  }
}

export default ChatWindow
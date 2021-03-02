import React, { Component } from 'react';

class MessageHistory extends Component {
  render() {
    const { user, messages } = this.props
    return (
      <ul className="message-list">
          {messages.map((message, index) => (
            <li
              key={index}
              className={
                message.username === user.username ? 'message sender' : 'message recipient'
              }
            >
              <p>{`${message.username}: ${message.text}`}</p>
            </li>
          ))}
        </ul>
    )
  }
}

export default MessageHistory
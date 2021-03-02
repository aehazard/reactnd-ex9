import React, { Component } from 'react';

class ComposeMessage extends Component {
  state = {
    messageContent: ''
  }

  isDisabled = () => {
    return this.state.messageContent.length > 0 ? false : true
  }

  handleInputChange = (event) => {
    const newMessageContent = event.target.value
    this.setState(()=>({
      messageContent: newMessageContent
    }))
  }

  handleClick = (event) => {
    event.preventDefault()
    const newMessage = {
      username: this.props.user.username,
      text: this.state.messageContent
    }
    this.props.handleMessageSend(newMessage)
  }

  render() {
    return (
      <form className="input-group">
        <input type="text" className="form-control" placeholder="Enter your message..." value={this.state.messageContent} onChange={this.handleInputChange}/>
        <div className="input-group-append">
          <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.handleClick}>
            SEND
          </button>
        </div>
      </form>
    )
  }
}

export default ComposeMessage
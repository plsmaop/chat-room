import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import { Message, MessageText, MessageList } from '@livechat/ui-kit';

const style = {
  height: 500,
  maxHeight: 500,
  width: '100%',
  maxwidth: '100%',
  textAlign: 'center',
  overflow: 'auto',
  display: 'inline-block',
};

class ChatHistory extends React.Component {
  componentDidMount() {
    this.scrollToBottom();
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }
  render() {
    return (
      <div>
        <Paper style={style} zDepth={1} >
          <div>
            <MessageList active>
              {
                this.props.chatHistory.map((msgObject) => {
                const { from, msg } = msgObject;
                let msgComponent;
                if (from === this.props.targetId) {
                  msgComponent = (
                    <Message authorName={this.props.targetName}>
                      <MessageText
                        style={{ maxWidth: 300, textAlign: 'left' }}
                      >{msg}
                      </MessageText>
                    </Message>
                  );
                }
                else msgComponent = (
                  <Message isOwn={true} authorName={this.props.name} >
                    <MessageText
                      style={{ maxWidth: 300, textAlign: 'left' }}
                    >{msg}
                    </MessageText>
                  </Message>
                );
                return msgComponent;
                })
              }
            </MessageList>
          </div>
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={(el) => { this.messagesEnd = el; }}
          />
        </Paper>
      </div>
    );
  }
}

ChatHistory.propTypes = {
  name: PropTypes.string.isRequired,
  targetName: PropTypes.string.isRequired,
  targetId: PropTypes.string.isRequired,
  chatHistory: PropTypes.arrayOf(Object).isRequired,
};

export default ChatHistory;

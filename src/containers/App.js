import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ChatRoom from './chatRoom';
import AddUser from './addUser';

const App = ({ isReadyToChat }) => (
  <div>
    { isReadyToChat ? <ChatRoom /> : <AddUser /> }
  </div>
);

App.propTypes = {
  isReadyToChat: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isReadyToChat: state.userModule.isReadyToChat,
});

export default connect(mapStateToProps)(App);

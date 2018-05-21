import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import RWDSideBar from '../components/RWDSideBar';
import AddUser from './addUser';

const App = ({ isReadyToChat }) => (
  <div className="mx-auto">
    { isReadyToChat ? <RWDSideBar /> : <AddUser /> }
  </div>
);

App.propTypes = {
  isReadyToChat: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isReadyToChat: state.userModule.isReadyToChat,
});

export default connect(mapStateToProps)(App);

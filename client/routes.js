import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import PropTypes from 'prop-types';
import history from './history';
import {Main} from './components';
import {loadUsers} from './store';

class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {
    return (
      <Router history={history}>
        <Main userList={this.props.list} />
      </Router>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.userList
  }
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(loadUsers())
    }
  }
};

export default connect(mapState, mapDispatch)(Routes)

// to populate
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired
};

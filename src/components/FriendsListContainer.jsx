import React, {Component} from 'react';
import {connect} from 'react-redux';

import FriendsList from './FriendsList.jsx';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/actionCreators';

@connect(state => {return {items: state}})
export default class FriendsListContainer extends Component {
  render() {
    const {dispatch} = this.props;
    return (
      <FriendsList {...this.props}
        {...bindActionCreators(actionCreators,dispatch)}
      />
    );
  }
}

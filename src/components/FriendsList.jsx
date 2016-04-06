import React, {Component} from 'react';
import Friend from './Friend.jsx';
import {Grid, Row, Col, Input} from 'react-bootstrap';
export default class FriendsList extends Component {

  constructor(props) {
    super(props);
    this.renderFriendsList = this.renderFriendsList.bind(this);
    this.onEnterPressed = this.onEnterPressed.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {value: ''};
  }

  onChange() {
    this.setState({
      value: this.refs['friend-creator'].getValue(),
    });
  }

  onEnterPressed(event) {
    if (event.charCode === 13) {
      this.props.addFriend(this.state.value);
      this.setState({
        value: '',
      });
    }
  }

  renderFriendsList({items}) {
    return (
        <div>
          {items.map(friend => {
            const _friend = {
              name: friend.get('name'),
              _id: friend.get('id'),
              fav: friend.get('fav'),
              removeFriend: this.props.removeFriend,
              favFriend: this.props.favFriend,
            };
            return (<Friend {..._friend}/>);
          })}
        </div>
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Input
            value={this.state.value}
            ref="friend-creator"
            type="text"
            placeholder="Add friend"
            onChange={this.onChange}
            onKeyPress={this.onEnterPressed}
          />
        </Row>
        <Row>
          <Col xs={6}>
            {this.props.items.size ?
              this.renderFriendsList(this.props) :
              null}
          </Col>
        </Row>
      </Grid>);
  }
}

FriendsList.propTypes = {
  items: React.PropTypes.arrayOf(Friend.propTypes),
  addFriend: React.PropTypes.func,
};

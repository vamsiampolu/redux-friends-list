import React, {Component} from 'react';
import {ListGroupItem, ButtonGroup, Button, Glyphicon} from 'react-bootstrap';

export default class Friend extends Component {

    constructor(props) {
      super(props);
      this.removeFriend = this.removeFriend.bind(this);
      this.favFriend = this.favFriend.bind(this);
    }

    removeFriend() {
      this.props.removeFriend(this.props._id);
    }

    favFriend() {
      this.props.favFriend(this.props._id);
    }

    render() {
      return (<ListGroupItem key={this.props._id} href="#" active={this.props.fav ? 'active' : ''}>
          <span>{this.props.name}</span>
          <ButtonGroup pullRight>
              <Button bsStyle="success" bsSize="small" onClick={this.favFriend}>
                  <Glyphicon glyph="star"/>
              </Button>
              <Button bsStyle="danger" bsSize="small" onClick={this.removeFriend}>
                  <Glyphicon glyph="remove"/>
              </Button>
          </ButtonGroup>
      </ListGroupItem>);
    }
}

Friend.propTypes = {
  name: React.PropTypes.string,
  _id: React.PropTypes.string,
};

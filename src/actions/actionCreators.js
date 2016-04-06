  import * as actionTypes from '../constants/actioncreators';

export function addFriend(name) {
  return {
    type: actionTypes.ADD_FRIEND,
    name,
  };
}

export function removeFriend(_id) {
  return {
    type: actionTypes.REMOVE_FRIEND,
    _id,
  };
}

export function favFriend(_id) {
  return {
    type: actionTypes.FAV_FRIEND,
    _id,
  };
}

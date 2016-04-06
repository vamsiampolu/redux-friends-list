  import {List, Map} from 'immutable';
  import * as actionTypes from '../constants/actioncreators';
  import uuid from 'node-uuid';

  const initialState = List();

export default function reducer(state = initialState, action) {
  const {name} = action;
  switch (action.type) {
  	case actionTypes.ADD_FRIEND: {
      return state.push(new Map({name, id: uuid.v4()}));
  	}

    case actionTypes.REMOVE_FRIEND: {
      const index = state.findIndex((item) => item.get('id') === action._id);
      return state.delete(index);
    }

    case actionTypes.FAV_FRIEND: {
      const index = state.findIndex((item) => item.get('id') === action._id);
      return state.update(index,(item) => item.set('fav', true));
    }

    default: {
      return state;
    }
  }
}

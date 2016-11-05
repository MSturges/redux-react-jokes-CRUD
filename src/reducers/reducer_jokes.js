import { FETCH_JOKES } from '../actions/index';

const INITIAL_STATE = { jokes: [], post: null };

export default function(state = INITIAL_STATE, action) {

  switch (action.type) {

    case FETCH_JOKES:
      return { ...state, jokes: action.payload.data };

    default:
      return state;
  }
}

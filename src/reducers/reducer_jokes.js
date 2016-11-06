import { FETCH_JOKES, FETCH_JOKE } from '../actions/index';

const INITIAL_STATE = { jokes: [], joke: null };

export default function(state = INITIAL_STATE, action) {


  switch (action.type) {

    case FETCH_JOKES:
    return { ...state, jokes: action.payload.data };

    case FETCH_JOKE:
    return { ...state, joke: action.payload.data };

    default:
    return state;
  }
}

import { FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_State = { all: [], post: null };

export default function(state = INITIAL_State, action) {
  switch (action.type) {

    case FETCH_JOKES:
      return { ...state, all: action.payload.data };

    default:
      return state;
  }
}

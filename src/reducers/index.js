import { combineReducers } from 'redux';
import JokesReducer from './reducer_jokes';

const rootReducer = combineReducers({
  jokes: JokesReducer,
});

export default rootReducer;

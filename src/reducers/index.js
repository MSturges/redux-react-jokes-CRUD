import { combineReducers } from 'redux';
import JokesReducer from './reducer_jokes';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  jokes: JokesReducer,
});

export default rootReducer;

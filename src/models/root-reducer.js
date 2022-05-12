import { combineReducers } from 'redux';
import { reducer as userReducer } from './user/reducers';

//console.log(reducer);

const reducer = combineReducers({
	user: userReducer
});

export { reducer };

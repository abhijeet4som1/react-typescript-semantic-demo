
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import UsersActionReducers from './UsersActionReducers';
import UserAddActionReducer from './UserAddActionReducer';
import { reducer as formReducer } from 'redux-form';

const appReducers = combineReducers({
	routing: routerReducer,
	userReducer: UsersActionReducers,
	userAddReducer: UserAddActionReducer,
	form: formReducer
});

const rootReducer = (state, action) => {
	return appReducers(state, action);
}
export {rootReducer};
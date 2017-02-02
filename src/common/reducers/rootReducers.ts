
import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import UsersActionReducers from './UsersActionReducers';
import UserAddActionReducer from './UserAddActionReducer';

const appReducers = combineReducers({
	routing: routerReducer,
	userReducer: UsersActionReducers,
	userAddReducer: UserAddActionReducer
});

const rootReducer = (state, action) => {
	return appReducers(state, action);
}
export {rootReducer};
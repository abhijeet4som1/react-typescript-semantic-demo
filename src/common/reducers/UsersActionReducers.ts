import {initialState, SET_IS_LOADING, UPDATE_USERS_LIST} from '../actions/UsersAction';

/*Action reducer for users component*/
export default function userReducer(state = initialState, action) {

	switch(action.type){

		case SET_IS_LOADING: {
			return state.set('isLoading', action.isLoading);
		}

		case UPDATE_USERS_LIST: {
			return state.set('users', action.users);
		}
		default: {
			return state;
		}
	}

}
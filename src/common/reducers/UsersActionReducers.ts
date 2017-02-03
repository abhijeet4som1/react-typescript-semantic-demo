import {
	initialState, 
	SET_IS_LOADING,
	SET_SHOW_EDIT_FORM,
	UPDATE_USERS_LIST,
	SET_USER_MODEL_AND_INDEX,
	SET_USER_MODEL
} from '../actions/UsersAction';

/*Action reducer for users component*/
export default function userReducer(state = initialState, action) {

	switch(action.type){

		case SET_IS_LOADING: {
			return state.set('isLoading', action.isLoading);
		}

		case SET_SHOW_EDIT_FORM: {
			return state.set('showEditForm', action.showEditForm);
		}

		case UPDATE_USERS_LIST: {
			return state.set('users', action.users);
		}

		case SET_USER_MODEL:{
			return state.set('model', action.model);
		}

		case SET_USER_MODEL_AND_INDEX: {
			return state.merge({
				model: action.model,
				selIndex: action.selIndex,
				showEditForm: action.showEditForm
			});
		}

		default: {
			return state;
		}
	}

}
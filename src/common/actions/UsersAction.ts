import {User} from '../components/users/user-list/UsersListHelper';
import {fromJS, List} from 'immutable';

/*Initial state*/
export const initialState = fromJS({
	users: List(),
	isLoading: false,

	selIndex: -1,
	model: undefined,
	showEditForm: false
});


/*Action creators for the user component*/

/*Action creator for setting is loading*/
export const SET_IS_LOADING = 'SET_IS_LOADING';
const setIsLoading = (state: boolean) => {
	return { type: SET_IS_LOADING, isLoading: state }
}

/*Set model show flag*/
export const SET_SHOW_EDIT_FORM = 'SET_SHOW_EDIT_FORM';
const setShowEditForm = (state: boolean) => {
	return { type: SET_SHOW_EDIT_FORM, showEditForm: state }
}

/*set user model*/
export const SET_USER_MODEL = 'SET_USER_MODEL';
const setModel = (user: User) => {
	return { type: SET_USER_MODEL, model: user }
}


/*Action creator for updating user list*/
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';
const updateUserList = (users: List<User>) => {
	return { type: UPDATE_USERS_LIST, users: users }
}

/*setting model for the user to edit*/
export const SET_USER_MODEL_AND_INDEX = 'SET_USER_MODEL_AND_INDEX';
const setModelAndSelIndex = (user: User, selIndex: number, showEditForm: boolean) => {
	return { type: SET_USER_MODEL_AND_INDEX, model: user, selIndex: selIndex, showEditForm: showEditForm }
}

/*action for adding new user*/
const addUser = (user: User) => {
	return (dispatch, getState) => {
		let currState = getState().userReducer;
		let newUsersList: List<User> = currState.get('users');
		newUsersList = newUsersList.push(user);
		dispatch(updateUserList(newUsersList));
	}
}

/*Action for editing user detail*/
const editUser = (index: number, user: User) => {
	return (dispatch, getState) => {
		let currState = getState().userReducer;
		let newUsersList: List<User> = currState.get('users');
		newUsersList = newUsersList.set(index, user);
		dispatch(setShowEditForm(false));
		dispatch(updateUserList(newUsersList));
	}
}

/*action for deleting user*/
const deleteUser = (index: number) => {
	return (dispatch,getState)=>{
		let currState = getState().userReducer;
		let newUsersList: List<User> = currState.get('users');
		newUsersList = newUsersList.delete(index);
		dispatch(updateUserList(newUsersList));
	}
}

export {
	setIsLoading,
	setShowEditForm,
	updateUserList,
	setModel,
	setModelAndSelIndex,
	addUser,
	editUser,
	deleteUser
}

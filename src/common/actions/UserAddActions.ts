import {User} from '../components/users/user-list/UsersListHelper';
import {addUser} from './UsersAction';
import {fromJS} from 'immutable';

/*Initial state of the form*/
export const initialState = fromJS({
	model: new User(),
	showModal: false
});

/*Action creators for the user component*/

export const SET_MODEL = 'SET_MODEL';
const setModel = (user: User) => {
	return { type: SET_MODEL, model: user }
}

export const SET_MODAL_STATE = 'SET_MODAL_STATE';
const setModalState = (state: boolean) => {
	return { type: SET_MODAL_STATE, showModal: state }
}


const addUserInList = (user:User) => {
	return (dispatch, state) => {
		//adding user in the list
		dispatch(addUser(user));
		//clearing model
		dispatch(setModel(new User()));

		//showing dialog
		dispatch(setModalState(true));
	}
}

export {
	setModel,
	addUserInList,
	setModalState
}
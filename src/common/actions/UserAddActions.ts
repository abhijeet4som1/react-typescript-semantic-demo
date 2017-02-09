import {User} from '../components/users/user-list/UsersListHelper';
import {addUser} from './UsersAction';
import {fromJS} from 'immutable';

/*Initial state of the form*/
export const initialState = fromJS({
	showModal: false
});

/*Action creators for the user component*/
export const SET_MODAL_STATE = 'SET_MODAL_STATE';
const setModalState = (state: boolean) => {
	return { type: SET_MODAL_STATE, showModal: state }
}


const addUserInList = (user: User) => {
	return (dispatch, state) => {
		//adding user in the list
		dispatch(addUser(user));

		//showing dialog
		dispatch(setModalState(true));
	}
}

export {
	addUserInList,
	setModalState
}
import {User} from '../components/users/user-list/UsersListHelper';
import {fromJS,List} from 'immutable';

export const initialState=fromJS({
	users:List(),
	isLoading:false
});

/*Action creators for the user component*/

export const SET_IS_LOADING = 'SET_IS_LOADING';
const setIsLoading = (state:boolean) => {
	return { type: SET_IS_LOADING, isLoading: state }
}

export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';
const updateUserList = (users: List<User>) => {
	return { type: UPDATE_USERS_LIST, users: users }
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

const editUser=(index:number,user:User)=>{
	return (dispatch,getState)=>{
		let currState=getState().userReducer;
		let newUsersList: List<User> = currState.get('users');
		newUsersList = newUsersList.set(index,user);
		dispatch(updateUserList(newUsersList));
	}
}

const deleteUser=(index:number)=>{
	return (dispatch,getState)=>{
		let currState=getState().userReducer;
		let newUsersList: List<User> = currState.get('users');
		newUsersList = newUsersList.delete(index);
		dispatch(updateUserList(newUsersList));
	}
}

export{
	setIsLoading,
	updateUserList,
	addUser,
	editUser,
	deleteUser
}

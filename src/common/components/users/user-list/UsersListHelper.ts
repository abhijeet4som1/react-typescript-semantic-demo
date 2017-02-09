/*helper file for model and other method used in the form*/
import {List} from 'immutable';
import {cloneDeep, trim} from 'lodash';

/*Props for user list*/
export interface UsersListProps {
	users: List<User>;
	visibleUser: List<User>;
	isLoading: boolean;
	searchName: string;

	selIndex:number;
	model:  User;
	showEditForm: boolean;

	dispatch: any;
}

export interface UserListState {
	delop?: number;
}

/*model for user*/
export class User {
	constructor(userName?: string, email?: string, phone?: string) {
		this.user_name = userName;
		this.email = email;
		this.phone = phone;
	}
	user_name: string;
	email: string;
	phone: string;
}


/*other methods used in the form*/

let _this: any;

/*Binding this with form instance*/
export const bindInstance = (obj) => _this = obj;

/*On click of action*/
export const onActionSelect = (index: number, value: string) => {
	switch(value){
		case 'EDIT':{
			_this.action.setModelAndSelIndex(_this.props.users.get(index), index, true);
			break;
		} 
		case 'REMOVE': {
			_this.action.deleteUser(index);
		}
	}
	_this.setState({ delop: _this.state.delop + 1 });
}

export const getVisibleUsers = (users: List<User>, searchName: string) => {
	console.log("get visible user called", searchName);
	if(users && searchName){
		return users.filter(user=> user.user_name.toLowerCase().indexOf(trim(searchName.toLowerCase())) > -1);
	} else {
		return users;
	}
}

/*method to update the user detail*/
export const editUserDetail = (values) => _this.action.editUser(_this.props.selIndex, values);

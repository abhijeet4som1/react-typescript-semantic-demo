/*helper file for model and other method used in the form*/
import {List} from 'immutable';
import {cloneDeep} from 'lodash';

/*Props for user list*/
export interface UsersListProps {
	users: List<User>;
	isLoading: boolean;

	selIndex:number;
	model:  User;
	showEditForm: boolean;

	dispatch: any;
}

export interface UserListState {
	delop?: number;
	selUserInd?: number;
	showEditForm?: boolean;
}

/*model for user*/
export class User {
	user_name: string;
	email: string;
	phone: string;
}


/*other methods used in the form*/

let _this: any;

/*Binding this with form instance*/
export const bindInstance = (obj) => _this = obj;
/**
on model value change
*/
export const onModelValueChange = (key: string, value: any) => {
	let newModel: User = cloneDeep(_this.props.model);
	newModel[key] = value;
	_this.action.setModel(newModel);
}

/*Handle value change*/
export const handleValueChange = (key: string, event: any) => {
	if (event) {
		event.persist();
		onModelValueChange(key, event.target.value);
	}
}

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

/*method to update the user detail*/
export const editUserDetail = () => _this.action.editUser(_this.props.selIndex, _this.props.model);

/*helper file for user add props and functions*/
import {User} from '../user-list/UsersListHelper';
import {cloneDeep} from 'lodash';
/*Props for the user add form*/
export interface UserAddprops {
	model: User;
	showModal: boolean;

	dispatch: any;
}


/*Other method used in the form*/
let _this: any;

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
	if(event){
		event.persist();
		onModelValueChange(key, event.target.value);
	}
}

/*Add user method*/
export const addUser = () => {
	_this.action.addUserInList(_this.props.model);
}
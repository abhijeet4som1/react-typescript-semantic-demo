/*helper file for user add props and functions*/
import {User} from '../user-list/UsersListHelper';
import {cloneDeep} from 'lodash';
/*Props for the user add form*/
export interface UserAddprops {
	showModal: boolean;
	
	dispatch: any;
}


/*Other method used in the form*/
let _this: any;

export const bindInstance = (obj) => _this = obj;

/*Add user method*/
export const addUser = (values) => _this.action.addUserInList(Object.assign(new User(), values));

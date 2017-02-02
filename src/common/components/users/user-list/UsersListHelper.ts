/*helper file for model and other method used in the form*/
import {List} from 'immutable';

export interface UsersListProps{
	users: List<User>;
	isLoading:boolean;
	dispatch: any;
}


export class User {
	user_name: string;
	email: string;
	phone: string;
}
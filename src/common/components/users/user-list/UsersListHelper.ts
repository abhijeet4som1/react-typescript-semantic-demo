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

let _this:any;

/*other methods used in the form*/
export const bindInstance = (obj) => _this=obj;

/*On click of action*/
export const onActionSelect = (value:string,index:number) => {
	console.log('action called',value,index);
}

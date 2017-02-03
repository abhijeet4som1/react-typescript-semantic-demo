import * as React from 'react';
import {User} from '../user-list/UsersListHelper';
import {startCase} from 'lodash';
import Dropdown from '../../dropdown/Dropdown';

/*props for the user card*/
interface UserCardProps{
	model: User;

	customKey:string;
	isAction : boolean;
	action?: any;
}

/*User card component*/
class UserCard extends React.Component<UserCardProps, {}>{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="ui card user-card" key={this.props.customKey}>
				<div className="content">					
					{
						this.props.isAction?
						<div className="right floated meta">
							<Dropdown
								options={[{ key: 'EDIT', value: 'Edit Detail' }, { key: 'REMOVE', value: 'Remove User' }]}
								label=""
								value={""}
								name={this.props.customKey}
								hideLabel={true}
								onValueChange={(key, value) => { this.props.action(value); } }
							/>
						</div>:""
					}							
					<div className="header">{startCase(this.props.model.user_name || 'Enter Name') }</div>
					<div className="meta">Email Address: { this.props.model.email}</div>
					<div className="description">Contact Number: {this.props.model.phone}</div>
				</div>
			</div>
		);
	}

}
export default UserCard;
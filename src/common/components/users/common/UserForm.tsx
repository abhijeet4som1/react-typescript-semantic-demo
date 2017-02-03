import * as React from 'react';
import {User} from '../user-list/UsersListHelper';
import UserCard from './UserCard';

interface UserFormProps {
	model: User;
	handleValueChange: any;

	isSaveBtn: boolean;
	saveAction?: any;
}
class UserForm extends React.Component<UserFormProps, {}>{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="sixteen wide ui grid">
				<div className="eight wide column">
					<div className="ui form userAddForm">
						<div className="required field">
							<label>Name</label>
							<div className="ui input">
								<input
									type="text"
									name="user_name"
									placeholder="User Name"
									value={this.props.model.user_name || ""}
									onChange={this.props.handleValueChange.bind(this, "user_name") }
								/>
							</div>
						</div>
						<div className="required field">
							<label>Email Address</label>
							<div className="ui input">
								<input
									type="text"
									name="email"
									placeholder="User Name"
									value={this.props.model.email || ""}
									onChange={this.props.handleValueChange.bind(this, "email") }
								/>
							</div>
						</div>
						<div className="required field">
							<label>Phone</label>
							<div className="ui input">
								<input
									type="text"
									name="phone"
									placeholder="User Name"
									value={this.props.model.phone || ""}
									onChange={this.props.handleValueChange.bind(this, "phone") }
								/>
							</div>
						</div>
					</div>
					{this.props.isSaveBtn ?
						<div className="buttonDiv">
							<button className="ui right floated button blue" onClick={this.props.saveAction}>Add User</button>
						</div>:""}
				</div>
				<div className="eight wide column">
					<UserCard
						model={this.props.model}
						isAction={false}
						customKey='user_add_action'
					/>
				</div>
			</div>
		);
	}
}

export default UserForm;
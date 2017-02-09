import * as React from 'react';
import {User} from '../user-list/UsersListHelper';
import UserCard from './UserCard';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {email, aol} from './ValidationUtil';

interface UserFormProps {
	model?: any;
	saveAction: any;
	btnLabel: any;
	handleSubmit?: any;
}
class UserForm extends React.Component<UserFormProps, {}>{

	constructor(props){
		super(props);
	}

	render(){
		return (
			<div className="sixteen wide ui grid">
				<div className="eight wide column">
					<form onSubmit={this.props.handleSubmit(this.props.saveAction)} className="ui form">
						<div className="required field">
							<label htmlFor="User Name">User Name</label>
							<Field name="user_name" component="input" type="text"/>
						</div>
						<div className="required field">
							<label htmlFor="lastName">Email</label>
							<Field name="email" component="input" type="email"/>
						</div>
						<div className="required field">
							<label htmlFor="email" validate={email}
								warn={aol}>Phone</label>
							<Field name="phone" component="input" type="text"/>
						</div>
						<div className="buttonDiv">
							<button type="submit" className="ui right floated button blue">{this.props.btnLabel}</button>
						</div>
					</form>
				</div>
				<div className="eight wide column">
					<UserCard
						model={this.props.model || new User()}
						isAction={false}
						customKey='user_add_action'
					/>
				</div>
			</div>
		);
	}
}

let wrapper = reduxForm({
	form: 'user'
});

const mapInitialValue = (state) => ({
	initialValues: state.userReducer.get('model', new User()),
	model: state.form.user && state.form.user.values
});


export default connect(mapInitialValue)((wrapper)(UserForm));
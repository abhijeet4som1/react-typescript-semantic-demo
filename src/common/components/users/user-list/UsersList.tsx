import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {startCase} from 'lodash';

import * as UsersAction from '../../../actions/UsersAction';
import * as helper from './UsersListHelper';

class UsersList extends React.Component<helper.UsersListProps, {}>{

	private action: any;

	constructor(props) {
		super(props);
		this.action = bindActionCreators(UsersAction as any, this.props.dispatch);
	}

	render() {
		return (
			<div>
				{(()=>{
					if(this.props.users.size > 0){
						let content=[];
						this.props.users.forEach((user:helper.User,index)=>{
							content.push(
								<div key={'user-list-' + index} className="ui card near-by-cards medium-cards">
									<div className="content">
										<div className="header">{startCase(user.user_name) }</div>
										<div className="meta">Email Address: { user.email }</div>
										<div className="description">Contact Number: {user.phone}</div>
									</div>
								</div>
							);
						})
						return <div>{content}</div>;
					}else{
						return (
							<div className="ui icon info message">
								<i className="search icon"></i>
								<div className="content">
									<div className="header">No Users added</div>
								</div>
							</div>
						);
					}
				})()}
			</div>
		);
	}
}
const mapStateToProps = state => ({
	users: state.userReducer.get('users'),
	isLoading: state.userReducer.get('isLoading')
})
export default connect(mapStateToProps)(UsersList);

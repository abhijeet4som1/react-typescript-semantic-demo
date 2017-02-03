import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserCard from '../common/UserCard';
import UserForm from '../common/UserForm';
import DialogBox from '../../dialog/DialogBox';

import * as UsersAction from '../../../actions/UsersAction';
import * as helper from './UsersListHelper';

class UsersList extends React.Component<helper.UsersListProps, helper.UserListState>{

	private action: any;

	constructor(props) {
		super(props);
		helper.bindInstance(this);
		this.state = { delop: 0 };
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
								<UserCard
									key={'user_card_' + index}
									model={user}
									isAction={true}
									customKey={'user_action_' + index}
									action={helper.onActionSelect.bind(this, index) }
								/>
							);
						})
						return (
							<div key={'cards_cont_' + this.state.delop}>
								<div className="ui doubling cards" style={{ marginTop: '.5rem' }}>
									{content}
								</div>
								{this.props.showEditForm &&
									<DialogBox
										width={800}
										title={"Edit detail of user: " + this.props.model.user_name}
										onClose={() => this.action.setShowEditForm(false)}
									>
										<div className="content">
											<UserForm
												model={this.props.model}
												handleValueChange={helper.handleValueChange}
												isSaveBtn={false}
											/>
										</div>
										<div className="actions">
											<div className="ui blue button" onClick={helper.editUserDetail}>Save Changes</div>
										</div>
									</DialogBox>
								}
							</div>
						);
					} else {
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
	isLoading: state.userReducer.get('isLoading'),
	selIndex: state.userReducer.get('selIndex'),
	model: state.userReducer.get('model'),
	showEditForm: state.userReducer.get('showEditForm')
})
export default connect(mapStateToProps)(UsersList);

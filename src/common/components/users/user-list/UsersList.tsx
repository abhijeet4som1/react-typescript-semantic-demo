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
		this.setSearchName = this.setSearchName.bind(this);
		this.action = bindActionCreators(UsersAction as any, this.props.dispatch);
	}

	componentWillUnmount(){
		this.action.setModel(undefined);
	}

	setSearchName(event){
		if(event){
			event.persist();
			this.action.setSearchName(event.target.value);
		}
	}

	render() {
		return (
			<div>
				{(()=>{
					if (this.props.visibleUser.size > 0) {
						let content=[];
						this.props.visibleUser.forEach((user: helper.User, index) => {
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
							<div key='cards_cont'>
								<div style={{ float: 'right' }}>
									<div className="ui icon input right floated">
										<input className="prompt" type="text" placeholder="Search..." value={this.props.searchName} onChange={this.setSearchName}/>
										<i className="search icon"></i>
									</div>
								</div>
								<div key={'card_user-' + this.state.delop} className="ui doubling cards" style={{ marginTop: '.5rem', clear: 'both' }}>
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
												saveAction={helper.editUserDetail}
												btnLabel="Save Changes"
											/>
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
	visibleUser: helper.getVisibleUsers(state.userReducer.get('users'), state.userReducer.get('searchName')),
	isLoading: state.userReducer.get('isLoading'),
	selIndex: state.userReducer.get('selIndex'),
	model: state.userReducer.get('model'),
	showEditForm: state.userReducer.get('showEditForm'),
	searchName: state.userReducer.get('searchName')
})
export default connect(mapStateToProps)(UsersList);

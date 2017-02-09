import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {User} from '../user-list/UsersListHelper';
import DialogBox from '../../dialog/DialogBox';
import UserForm from '../common/UserForm';

import * as helper from './UsersAddHelper';
import * as UsersAddAction from '../../../actions/UserAddActions';

class UserAdd extends React.Component<helper.UserAddprops, {}>{

	private action: any;

	constructor(props){
		super(props);
		this.action = bindActionCreators(UsersAddAction as any, this.props.dispatch);
		helper.bindInstance(this);
	}

	render(){
		return (
			<div>
				<UserForm
					saveAction={helper.addUser}
					btnLabel="Add User"
				/>
				{this.props.showModal ?
					<DialogBox width={500} title="Success!" onClose={() => { this.action.setModalState(false); } }>						
						<div className="content">
							User Successfully added.
						</div>
					</DialogBox> : ""
				}
			</div>
		);
	}

}
const mapStateToProps = state => ({
	showModal: state.userAddReducer.get('showModal')
})
export default connect(mapStateToProps)(UserAdd);

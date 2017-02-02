import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {User} from '../user-list/UsersListHelper';
import Modal from '../../modal/Modal';
import {startCase} from 'lodash';

import * as helper from './UsersAddHelper';
import * as UsersAddAction from '../../../actions/UserAddActions';

class UserAdd extends React.Component<helper.UserAddprops, {}>{

	private action: any;

	constructor(props){
		super(props);
		this.action = bindActionCreators(UsersAddAction as any, this.props.dispatch);
		helper.bindInstance(this);
	}

	componentDidMount(){
		$("#userAddForm").form();
	}
	componentWillUnmount(){
		this.action.setModel(new User());
	}

	render(){
		return (
			<div>
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
										onChange={helper.handleValueChange.bind(this, "user_name") }
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
										onChange={helper.handleValueChange.bind(this, "email") }
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
										onChange={helper.handleValueChange.bind(this, "phone") }
									/>
								</div>
							</div>
						</div>
						{!this.props.isHideBtn ?
								<div className="buttonDiv">
									<button className="ui right floated button blue" onClick={helper.addUser}>Add User</button>
								</div>:""}
					</div>
					<div className="eight wide column">
						<div className="ui card near-by-cards medium-cards">
							<div className="content">
								<div className="header">{startCase(this.props.model.user_name) }</div>
								<div className="meta">Email Address: { this.props.model.email }</div>
								<div className="description">Contact Number: {this.props.model.phone}</div>
							</div>
						</div>
					</div>
				</div>
				{!this.props.isHideBtn ?<Modal message="User successfully added." onClose={() => { setTimeout(() => { this.action.setModalState(false); }, 100) } } isShow={this.props.showModal}/>:""}
			</div>
		);
	}

}
const mapStateToProps = state => ({
	model: state.userAddReducer.get('model'),
	showModal: state.userAddReducer.get('showModal')
})
export default connect(mapStateToProps)(UserAdd);

import * as React from 'react';
import MenuItem from './MenuItem';
import * as route from '../../../constants/RouteConstants';

require('./SideBar.less');
class SideBar extends React.Component<{}, {}>{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="sidebar-menu">
        		<div className='menu-items'>
					<MenuItem label="Users" target={`${route.USERS_LIST}`} iconClass="users"/>
					<MenuItem label="Add User" target={`${route.USER_ADD}`} iconClass="plus"/>
				</div>
        		<div className='extra-space'></div>
			</div>
		);
	}
}

export default SideBar;
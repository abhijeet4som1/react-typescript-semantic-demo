import * as React from 'react';
import {Link} from 'react-router';

interface MenuItemProps {
	label: string;
	target: string;
	iconClass: string;
}

class MenuItem extends React.Component<MenuItemProps, {}>{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Link className='item'
				activeClassName='sidebar-menu-active'
				to={{ pathname: this.props.target }}>
        			<i className={`${this.props.iconClass} icon sidebar-icon`}></i>
        			<span className='sidebar-label'>{this.props.label}</span>
        	</Link>
		);
	}
}

export default MenuItem;
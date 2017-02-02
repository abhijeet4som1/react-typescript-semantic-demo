import * as React from 'react';

class Header extends React.Component<{}, {}>{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='top-title-bar'>
				<a href="#" className='menu-link'>
					<i className='ui icon content' />
				</a>				
			</div>
		);
	}
}

export default Header;
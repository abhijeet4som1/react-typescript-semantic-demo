import * as React from 'react';
import Header from './header/Header';
import SideBar from './side-bar/SideBar';

require('./landing.less');
class Landing extends React.Component<{}, {}>{

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div style={{ height: '100%' }} className={`tep-layout`}>
				<div className='top-sidebar'>
					<div className="app-name">User Management</div>
					<SideBar/>
				</div>
				<div className='height-100-perc'>
					<Header/>
					<div className='content-body' style={{height:'calc(100% - 65px)'}}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}

export default Landing;

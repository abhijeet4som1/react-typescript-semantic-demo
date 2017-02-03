import * as React from 'react';

interface DialogBoxProps {
	width: number;
	title: string;

	onClose: any;
}

/*Common dialog box*/
require('./dialog.less');
class DialogBox extends React.Component<DialogBoxProps, { marginTop: number }>{

	constructor(props){
		super(props);
		this.state = { marginTop: 0 };
	}

	componentDidMount(){
		let height = document.getElementById('my-dialog').clientHeight;
		height = -height / 2;
		this.setState({ marginTop: height });
	}

	render(){
		let marginLeftCal = -(this.props.width / 2);
		return (
			<div className="holder">
				<div id="my-dialog" className="ui modal my-dialog" style={{ width: this.props.width, marginLeft: marginLeftCal, marginTop: this.state.marginTop }}>
					<i className="close icon" onClick={this.props.onClose}></i>
					<div className="header">{this.props.title}</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default DialogBox;
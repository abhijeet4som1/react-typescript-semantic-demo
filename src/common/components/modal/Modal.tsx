import * as React from 'react';

interface ModelProps {
	message: string;
	onClose: () => void;
}

class Modal extends React.Component<ModelProps, {}>{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		let _that = this;
		$('.test-model')
			.modal({
				closable: false,
				onApprove: function() {
					_that.props.onClose();
				}
			})
			.modal('show');
	}

	componentWillUnmount(){
		console.log("component will un mount called from modal");
		$(".test-model").remove();
	}

	render(){
		return (
			<div className="ui basic modal test-model">
			  	<div className="header">Success!</div>
			  	<div className="content">
			    	<p>{this.props.message}</p>
			  	</div>
			  	<div className="actions">
			    	<div className="ui approve button">Ok</div>
			  	</div>
			</div>
		);
	}
}

export default Modal;
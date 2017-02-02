import * as React from 'react';

interface ModelProps {
	message: string;
	onClose: () => void;
	isShow: boolean;
}

class Modal extends React.Component<ModelProps, {}>{

	constructor(props){
		super(props);
	}

	componentDidMount(){
		if (this.props.isShow) {
			this.showModal();
		}
	}

	componentDidUpdate(prevProps,prevState){
		if (this.props.isShow && prevProps.isisShow != this.props.isShow) {
			this.showModal();
		}
	}

	showModal(){
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

	render(){
		return (
			<div className="ui modal test-model">
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

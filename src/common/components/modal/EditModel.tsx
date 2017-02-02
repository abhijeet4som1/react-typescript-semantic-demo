import * as React from 'react';
import {User} from '../users/user-list/UsersListHelper';
import UserAdd from '../users/user-add/UserAdd';

/*props for the component*/
interface EditModalProps{
    model:User;
    onClose: () => void;
  	isShow: boolean;
}

class EditModal extends React.Component<EditModalProps,{}>{

  constructor(props){
    super(props);
  }

  componentDidMount(){
		if (this.props.isShow) {
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

  componentDidUpdate(prevProps,prevState){
		if (this.props.isShow && prevProps.isisShow != this.props.isShow) {
			this.showModal();
		}
	}

  render(){
    return(
      <div className="ui modal edit-model">
			  	<div className="header">Updating details of : {this.props.model.user_name}</div>
			  	<div className="content">
              <UserAdd isHideBtn={true}/>
			  	</div>
			  	<div className="actions">
			    	<div className="ui approve button">Ok</div>
			  	</div>
			</div>
    )
  }

}


import * as React from 'react';
import * as helper from './DropdownHelper';
import {trim} from 'lodash';
class Dropdown extends React.Component<helper.DropdownModelProps, {}>{

    constructor(props){
      super(props);
    }

    componentDidMount(){
      this.initializeDropdownActions();
    }

    initializeDropdownActions() {
		    var options = {};
		    options["onChange"]=(value:string,text:string,element:any)=>{
				      this.props.onValueChange(this.props.name, value, element);
			  }
			  $(`[name='${this.props.name}']`).dropdown(options);
        console.log("dropdown initialized");
		}

    render(){
      return(
        <div>
          {!this.props.hideLabel && <label key={`droplabel-${this.props.name}`}>{this.props.label}</label>}
          <div key={`dropdown-${this.props.name}`} id={this.props.name} name={this.props.name} className="ui inline dropdown">
              <div key={`deftext${this.props.name}`} className="text"></div>
              <i key={`dropIcon${this.props.name}`} className="setting icon" />
              <div className="menu">
                  {(()=>{
                    if(this.props.options && this.props.options.length>0){
                      let options=[];
                      this.props.options.forEach((option,index)=>{
                        options.push(<div key= {index} className="item" data-value={trim(option.key) }>{option.value}</div >);
                      });
                    }
                  })()}
              </div>
          </div>
       </div>
      );
    }
}
export default Dropdown;

import React, { Component } from 'react';

export default class Greeting extends Component{
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <label>Name:
          <input type="text" value={this.props.lineName} onChange={this.props.nameChange} />
        </label>
        <div>
          {this.props.lineName.length > 0 ? "Welcome to React, " + this.props.lineName : ""}
        </div>
      </div>
    );
  }
}




// * Greeter
// * ------------------------
// * Requirements:
// *   - Create a text input box with the label 'Name'
// *   - When something has been entered into the text box a div should display:
// *     "Welcome to React, [contents of the text box]"
// *   - When the text box is empty, the div should be empty (i.e. it shouldn't display 'Welcome to React,'.
// */

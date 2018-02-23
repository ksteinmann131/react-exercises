import React, { Component } from 'react';
import Greeting from './Greeting.js';

export default class GreetingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ""};
    this.nameChange = this.nameChange.bind(this);
  }
  nameChange(e) {
    console.log(e.target.value);
    this.setState({name: e.target.value});
  }

  render(){
    return(
      <div><Greeting nameChange={this.nameChange} lineName={this.state.name}/>
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

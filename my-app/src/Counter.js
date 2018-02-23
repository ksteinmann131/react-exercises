import React, { Component } from 'react';

export default class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {num:0};
  }
  counterClick() {
    if () {
      this.setState({
        num: this.state.num + 1
      });
    } else {
      this.setState({
        num: this.state.num - 1
      });
    }
  }

  render(){
    return(
      <div>
        <button id="plus" onClick={this.counterClick.bind(this)}>+</button>
        <div>{this.state.num}</div>
        <button id="minus" onClick={this.counterClick.bind(this)}>-</button>
      </div>
    );
  }
}






/**
 * EXERCISE
 *
 * Counter
 * ------------------------
 * Requirements:
 *   - The counter should start displaying 0
 *   - There should be a minus button that decrements the counter by one
 *   - There should be a plus button that increments the counter by one
 *
 */

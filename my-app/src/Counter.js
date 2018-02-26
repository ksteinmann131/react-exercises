import React, { Component } from 'react';

export default class Counter extends Component{
  constructor(props){
    super(props);
    this.state = {
      num:0,
    };
  }
  counterClick(e) {
    console.log(e.target);
    if (e.target.id == "plus"){
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
      <div id="counters">
        <button id="plus" onClick={(e) => this.counterClick(e)}>+</button>
        <div>{this.state.num}</div>
        <button id="minus" onClick={(e) => this.counterClick(e)}>-</button>
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

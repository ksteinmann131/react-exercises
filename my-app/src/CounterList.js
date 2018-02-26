import React, {Component} from "react";
import Counter from './Counter.js';

export default class CounterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listitem: [{}],
    };
  }

  listAdd(e){
    console.log(e.target);
    if (e.target.id == "addCounter"){
      this.setState({
        listItem: 
        })
      });
    } else {
      this.setState({
        listItem: this.state.listItem
      });
    }
  }

  render(){
    return(
      <div>
        <button id="addCounter" onClick={(e) => this.listAdd(e)}>Add</button>
        <button id="subCounter" onClick={(e) => this.listAdd(e)}>Remove</button>
        <div>
          <ul id="list">
            <li><Counter/></li>

          </ul>
        </div>
      </div>
    );
  }

}








/**
 * EXERCISE
 *
 * CounterList
 * ------------------------
 * Requirements:
 *   - Create a list of counters from exercise 3
 *   - The user should be able to add and remove counters from the list
 *   - All counters should have different state
 */

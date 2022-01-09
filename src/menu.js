import React, { Component, Fragment } from "react";
import MenuItems from './menuItems';
import "./menu.css";

class Menu extends Component {
  // add item
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      list: ["rice", "fire rice"],
    };
  }
  render() {
    // some time we want to return more tag we can use Fragment to do that
    return (
      // if we want to use flex tag
      <Fragment>
        <div>
          {/* for in react is htmlFor */}
          <label htmlFor="input">Add more items: </label>
          {/* onChange is event */}
          {/* if not use bind this will undefine */}
          <input
            id="input"
            className="input"
            value={this.state.input}
            onChange={this.inputChange.bind(this)}
          />
          <button onClick={this.addList.bind(this)}>Add</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (

                <div><MenuItems /> </div>
 
            )
          })}
        </ul>
      </Fragment>
    );
  }

  deleteItem(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list: list });
  }
  //add to list
  addList() {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: "",
    });
  }
  inputChange(e) {
    this.setState({
      input: e.target.value,
    });
  }
}

export default Menu;

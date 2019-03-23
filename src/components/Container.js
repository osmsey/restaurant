import React, { Component } from "react";
import { MainNav } from "./MainNav";
//import { About } from "./About";
import Menu from "./Menu";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: <Menu />
    };
    this.activator = this.activator.bind(this);
  }
  activator(event) {
    this.setState({ active: "<" + event.target.value + " />" });
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="container">
        <MainNav activate={this.activator} />
        {this.state.active}
      </div>
    );
  }
}

export default Container;

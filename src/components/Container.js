import React, { Component } from "react";
import { MainNav } from "./MainNav";
import { About } from "./About";
import { Chefs } from "./Chefs";
import { Contact } from "./Contact";
import Menu from "./Menu";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: <Chefs />
    };
    this.nav = [
      { id: "About", comp: <About /> },
      { id: "Menu", comp: <Menu /> },
      { id: "Contact", comp: <Contact /> },
      { id: "Chefs", comp: <Chefs /> }
    ];
    this.activator = this.activator.bind(this);
  }
  activator(event) {
    this.nav.map(item => {
      if (event.target.value === item.id) {
        this.setState({ active: item.comp });
      }
    });
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

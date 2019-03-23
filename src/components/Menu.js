import React, { Component } from "react";
import { Scroller } from "./Scroller";
import { Dishes } from "./Dishes";
import { MenuContent } from "./MenuContent";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "0"
    };
    this.active = this.active.bind(this);
    this.nxt = this.nxt.bind(this);
    this.prv = this.prv.bind(this);
  }
  active(event) {
    this.setState({ active: event.target.id });
  }
  nxt(event) {
    this.setState({ active: Number(this.state.active) + 1 });
  }

  prv(event) {
    if (this.state.active !== 0) {
      this.setState({ active: Number(this.state.active) - 1 });
    }
  }
  render() {
    const secondary_menu = ["BREAKFAST", "APPETIZER", "MAIN", "DESSERT"];
    let dishes_list = [
      { id: "br1", images: ["b1", "b2", "b3", "b4"] },
      { id: "br2", images: ["b5", "b6", "b7", "b8"] },
      { id: "br1", images: ["b3", "b1", "b4", "b2"] }
    ];
    return (
      <div className="menu">
        <div className="menu-wrap">
          <ul className="menu-nav">
            {secondary_menu.map(item => (
              <li key={item.toString()}>
                <button className="button">{item}</button>
              </li>
            ))}
          </ul>
          <Dishes {...dishes_list[this.state.active]} />
          <Scroller activate={this.active} next={this.nxt} prev={this.prv} />
        </div>
        <MenuContent />
      </div>
    );
  }
}

export default Menu;

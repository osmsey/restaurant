import React, { Component } from "react";
import { Scroller } from "./Scroller";
import { Dishes } from "./Dishes";

class MiddlePart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "0"
    };
    this.active = this.active.bind(this);
  }
  active(event) {
    this.setState({ active: event.target.id });
  }
  render() {
    const secondary_menu = ["BREAKFAST", "APPETIZER", "MAIN", "DESSERT"];
    let dishes_list = [
      { id: "br1", images: ["b1", "b2", "b3", "b4"] },
      { id: "br2", images: ["b5", "b6", "b7", "b8"] },
      { id: "br1", images: ["b1", "b2", "b3", "b4"] }
    ];
    return (
      <div className="middle-part">
        <ul className="middle-menu">
          {secondary_menu.map(item => (
            <li key={item.toString()}>
              <a href="" className="button">
                {item}
              </a>
            </li>
          ))}
        </ul>
        <Dishes {...dishes_list[this.state.active]} />
        <Scroller activate={this.active} />
      </div>
    );
  }
}

export default MiddlePart;

import React from "react";

const Btns = ["About", "Menu", "Contact", "Chefs"];

export function MainNavButtons(props) {
  return (
    <div className="nav_buttons">
      {Btns.map(btn => (
        <button
          key={btn}
          href=""
          className="button"
          onClick={props.activator}
          value={btn}
        >
          {btn.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

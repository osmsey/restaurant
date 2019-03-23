import React from "react";
import { MainNavButtons } from "./MainNavButtons";

export function MainNav(props) {
  return (
    <div className="main-nav">
      <div className="logo">
        <img src="./Img/Logo.JPG" alt="" />
      </div>
      <MainNavButtons activator={props.activate} />
    </div>
  );
}

import React from "react";

export function Chefs(props) {
  return (
    <div className="content">
      <div className="chefs">
        <div
          className="avatar"
          style={{ backgroundImage: "url(./Img/Chefs/John.png)" }}
        />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
      <div className="chefs">
        <div
          className="avatar"
          style={{ backgroundImage: "url(./Img/Chefs/Doe.jpg)" }}
        />
        <h2>Doe John</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

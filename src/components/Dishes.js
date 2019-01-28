import React from "react";

export function Dishes(props) {
  return (
    <div class="dishes-wrap">
      <div class="dishes" id={props.id}>
        {props.images.map(dish => (
          <img
            key={dish}
            src={`./Img/Breakfast/${dish}.jpg`}
            alt=""
            class="dish-tile"
          />
        ))}
      </div>
    </div>
  );
}

import React from "react";

let nxt = ">";
let prv = "<";

export function Scroller(props) {
  return (
    <div class="scroller">
      <div class="btnNext">
        <label for="prev" onClick={props.prev}>
          {prv}
        </label>
      </div>
      <div class="dots">
        <div class="btn" id="0" onClick={props.activate} />
        <div class="btn" id="1" onClick={props.activate} />
        <div class="btn" id="2" onClick={props.activate} />
        <div class="btn" id="btn4" />
      </div>
      <div class="btnNext">
        <label for="next" onClick={props.next}>
          {nxt}
        </label>
      </div>
    </div>
  );
}

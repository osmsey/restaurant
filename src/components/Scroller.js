import React from "react";

export function Scroller(props) {
  return (
    <div class="scroller">
      <div class="btnNext">
        <label for="" />
      </div>
      <div class="dots">
        <div class="btn" id="0" onClick={props.activate} />
        <div class="btn" id="1" onClick={props.activate} />
        <div class="btn" id="2" onClick={props.activate} />
        <div class="btn" id="btn4" />
      </div>
      <div class="btnPrev">
        <label for="" class="btnNext" />
      </div>
    </div>
  );
}

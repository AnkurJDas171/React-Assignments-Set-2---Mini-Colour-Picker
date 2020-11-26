import React from "react";
import "../styles/Child.css";

export default function Selection({applyColor,selectionStyle}) {



  return (
    <div className="fix-box" style={selectionStyle} onClick={applyColor}>
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

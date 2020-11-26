import React from "react";
import "../styles/Child.css";

export default function Selection({ applyColor, selectionStyle }) {
  let [selectionStyle, updateSelectionStyle] = React.useState({
    background: ""
  });
  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => applyColor(updateSelectionStyle)}
    >
      <h2 className="subheading">Selection</h2>
    </div>
  );
}

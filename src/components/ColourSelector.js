import React from "react";
import "../styles/App.css";

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background } = config;
  return (
    <button
      className={config.classname}
      onClick={() => selectNextBackground({ nextBackground: background })}
    >
      select-next-background
    </button>
  );
};
export default ColourSelector;

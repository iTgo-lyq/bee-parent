import React from "react";

const makeStyle = (size = "23px") => {
  return {
    width: size,
    height: size,
  };
};

const Icon = (props) => {
  const { size, icon } = props;
  const style = makeStyle(size);

  return (
    <svg className="icon" style={style} aria-hidden="true">
      <use xlinkHref={`#${icon}`}></use>
    </svg>
  );
};

export default Icon;

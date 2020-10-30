import React from "react";

const makeStyle = (size = 23) => {
  return {
    width: size + "px",
    height: size + "px",
  };
};

const Icon = (props) => {
  const { size, icon } = props;
  const style = makeStyle(size);

  return (
    <svg className='icon' style={style} aria-hidden="true">
      <use xlinkHref={`#icon-${icon}`}></use>
    </svg>
  );
};

export default Icon;

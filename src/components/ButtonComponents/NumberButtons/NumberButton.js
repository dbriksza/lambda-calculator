import React from "react";

const NumberButton = props => {
  return (
    <>
      <button>
        <span>{props.numbers}</span>
      </button>
    </>
  );
};

export default NumberButton;

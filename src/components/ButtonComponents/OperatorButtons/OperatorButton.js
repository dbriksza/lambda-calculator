import React from "react";

const OperatorButton = props => {
  console.log(props);
  return (
    <>
      <button>
        <span>{props.operators.char}</span>
      </button>
    </>
  );
};

export default OperatorButton;

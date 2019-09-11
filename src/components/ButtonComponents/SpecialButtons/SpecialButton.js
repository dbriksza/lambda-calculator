import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button className="specialButton">
        <span>{props.specials}</span>
      </button>
    </>
  );
};

export default SpecialButton;

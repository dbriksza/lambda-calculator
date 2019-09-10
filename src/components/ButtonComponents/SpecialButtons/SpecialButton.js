import React from "react";

const SpecialButton = props => {
  return (
    <>
      <button>
        <span>{props.specials}</span>
      </button>
    </>
  );
};

export default SpecialButton;

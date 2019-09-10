import React, { useState } from "react";
import { specials } from "../../../data";
import SpecialButton from "./SpecialButton";

function Specials() {
  const [specialsState] = useState(specials);
  return (
    <div className="specialContainer">
      {specialsState.map((specials, index) => (
        <SpecialButton key={index} specials={specials} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
}

export default Specials;

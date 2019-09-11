import React, { useState } from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton";

function Numbers() {
  const [numbersState] = useState(numbers);
  return (
    <div>
      {numbersState.map((numbers, index) => (
        <NumberButton key={index} numbers={numbers} />
      ))}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
}

export default Numbers;

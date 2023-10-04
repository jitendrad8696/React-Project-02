import React from "react";

const CustomButton = ({ colorValue, setColorFunction }) => {
  return (
    <button
      style={{ backgroundColor: colorValue }}
      onClick={() => {
        setColorFunction(colorValue);
      }}
    >
      {colorValue}
    </button>
  );
};

export default CustomButton;

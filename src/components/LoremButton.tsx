import React from "react";
import { lorem } from "txtgen";
import { SetTextProps } from "../types";

const LoremButton: React.FC<SetTextProps> = ({ setText, setUserInput, setIncorrectText }) => {
  return (
    <button
      className="button"
      onClick={() => {
        setUserInput("");
        setIncorrectText("");
        setText(lorem(40, 40));
      }}
    >
      lorem
    </button>
  );
};

export default LoremButton;

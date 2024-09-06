import { SetTextProps } from "../types";
import React from "react";
import { generate } from "random-words";

const NormalButton: React.FC<SetTextProps> = ({ setText, setUserInput, setIncorrectText }) => {
  return (
    <button
      className="button"
      onClick={() => {
        setUserInput("");
        setIncorrectText("");
        setText(generate({
          exactly: 44,
          join: " ",
          minLength: 2,
          maxLength: 8,
        }));
      }}
    >
      normal
    </button>
  );
};

export default NormalButton;

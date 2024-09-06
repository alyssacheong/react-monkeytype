import React from "react";
import { generate } from "random-words"; // assuming generate is imported here
import { SetTextProps } from "../types";

const CapslockButton: React.FC<SetTextProps> = ({
  setText,
  setUserInput,
  setIncorrectText,
}) => {
  return (
    <button
      className="button"
      onClick={() => {
        setUserInput("");
        setIncorrectText("");
        setText(
          generate({
            exactly: 44,
            wordsPerString: 1,
            formatter: (word) => word.toUpperCase(),
            join: " ",
          })
        );
      }}
    >
      capslock
    </button>
  );
};

export default CapslockButton;

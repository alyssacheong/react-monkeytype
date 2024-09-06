import React from "react";
import { generate } from "random-words";
import { SetTextProps } from "../types";

const CapitalizeButton: React.FC<SetTextProps> = ({
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
            formatter: (word, index) => {
              return index === 0
                ? word.slice(0, 1).toUpperCase().concat(word.slice(1))
                : word;
            },
            join: " ",
          })
        );
      }}
    >
      capitalise
    </button>
  );
};

export default CapitalizeButton;

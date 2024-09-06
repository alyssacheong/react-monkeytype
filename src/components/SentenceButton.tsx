import React from "react";
import { paragraph } from "txtgen"; // assuming paragraph is imported here
import { SetTextProps } from "../types";

const SentenceButton: React.FC<SetTextProps> = ({
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
        setText(paragraph(2));
      }}
    >
      sentence
    </button>
  );
};

export default SentenceButton;

import { useState } from "react";
import { generate, count } from "random-words";
import "./index.css";
import logo from "./logo.png";
import { lorem, paragraph } from "txtgen";

export default function App() {
  const [text, setText] = useState((generate(20) as string[]).join(" "));

  return (
    <div>
      <div className="top">
        <img src={logo} className="fish" alt="" />

        <div className="logo">
          <p className="small-header">toasterfish</p>
          <h1 className="header">toastertype</h1>
        </div>
      </div>

      <div className="settings">
        <button
          className="button"
          onClick={() => {
            setText(lorem(40, 40));
          }}
        >
          lorem
        </button>

        <button
          className="button"
          onClick={() => {
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

        <button
          className="button"
          onClick={() => {
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
          caps lock
        </button>

        <button
          className="button"
          onClick={() => {
            setText(paragraph(2));
          }}
        >
          sentence
        </button>
      </div>

      <div className="paragraph">
        <p>{text}</p>
        <button
          className="refresh-button"
          onClick={() => {
            setText(
              generate({ exactly: 44, join: " ", minLength: 2, maxLength: 8 })
            );
          }}
        >
          refresh
        </button>
      </div>
    </div>
  );
}

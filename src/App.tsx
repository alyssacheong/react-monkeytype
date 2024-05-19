import { useState } from "react";
import { generate, count } from "random-words";
import "./index.css";
import logo from "./logo.png";
import refresh from "./refresh.png";
import { lorem, paragraph } from "txtgen";
import text from "./text.tsx"

export default function App() {
  const [text, setText] = useState((generate(40) as string[]).join(" "));
  const [letter, setLetter] = useState({
    character: "a",
    index: 0,
  });

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
          capslock
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
            let output_text = generate({ exactly: 44, join: " ", minLength: 2, maxLength: 8 })
            setText(
              output_text
            );
          }}
        >
          <img src={refresh} className="refresh-button" alt="" />
        </button>
      </div>
      
      <div className="input-container">

      <p className="input-text">{letter.character}</p>
          

      <input
        className="input-box"
        type="text"
        onInput={(ev) => {
          const value = ev.currentTarget.value;

          setLetter((prev) => {
            const newIndex = prev.index + 1;
          
            prev.character = value;

            let current = value.slice(-1);
            console.log(current);
            console.log(newIndex);

            return { ... prev, index: newIndex };
          });
        }}
      ></input>

      </div>
      



    </div>
  );
}

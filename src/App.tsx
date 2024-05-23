import { useState } from "react";
import { generate } from "random-words";
import "./index.css";
import logo from "./logo.png";
import refresh from "./refresh.png";
import { lorem, paragraph } from "txtgen";
// import text from "./text.tsx";

export default function App() {
  const [text, setText] = useState((generate(40) as string[]).join(" "));
  const [userInput, setUserInput] = useState("");
  // const [letter, setLetter] = useState({
  //   character: "a",
  //   index: 0,
  // });

  const [counter, setCounter] = useState(0);

  const unwritten = text.slice(userInput.length);

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
        <p>
          <span className="userText">{userInput}</span>
          
          <span className="generatedText">{unwritten}</span>
        </p>
        <input
          className="input-box"
          type="text"
          value={userInput}
          onInput={(ev) => {

            // value is the letter that was just typed
            let value = ev.currentTarget.value;

            // unwritten.charAt(0) is the character at that index
            // counter starts at 0
            // setUserInput is the text that has to be input

            // ! DEBUGGING
            // console.log("unwritten char at: " + unwritten.charAt(0));
            // console.log(counter);
            // console.log("value: " + value);
            // console.log("last chara: " + value[value.length - 1]);
            // setCounter((prev) => prev + 1);
            // setUserInput(value);
            
            // ! DEBUGGING

            if (value[value.length - 1] != unwritten.charAt(0)) {
              console.log("wrong letter typed: " + value[value.length - 1]);
              
            } else {
              setCounter((prev) => prev + 1);
              setUserInput(value);
              
              // below line is needed otherwise it complains that counter is never read
              console.log(counter);
            }

            //console.log(value);
            // * this is the next letter that should be typed : unwritten.charAt(1)
            // ! MAY BE USEFUL: text.charAt

            
            // setLetter((prev) => {
            //   const newIndex = prev.index + 1;

            //   prev.character = value;

            //   let current = value.slice(-1);
            //   console.log(current);
            //   console.log(newIndex);

            //   return { ...prev, index: newIndex };
            // });
          }}
        ></input>
      </div>
      <button
        className="refresh-button"
        onClick={() => {
          let output_text = generate({
            exactly: 44,
            join: " ",
            minLength: 2,
            maxLength: 8,
          });
          setText(output_text);
        }}
      >
        <img src={refresh} className="refresh-button" alt="" />
      </button>
    </div>
  );
}

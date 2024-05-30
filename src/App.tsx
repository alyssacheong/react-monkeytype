import { useState } from "react";
import { generate } from "random-words";
import "./index.css";
import logo from "./logo.png";
import refresh from "./refresh.png";
import { lorem, paragraph } from "txtgen";
// import text from "./text.tsx";

export default function App() {
  const [text, setText] = useState((generate(40) as string[]).join(" ")); // all the text that needs to be input
  const [userInput, setUserInput] = useState(""); // all the text user has currently input
  const unwritten = text.slice(userInput.length); // all the text user is yet to input
  const [previousValue, setPreviousValue] = useState(""); // previous input value to detect deletions


  const [incorrectText, setIncorrectText] = useState("");
  const [counter, setCounter] = useState(0);



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
          <span className="incorrectText">{incorrectText}</span>
          <span className="generatedText">{unwritten}</span>
        </p>
        <input
          className="input-box"
          type="text"
          value={userInput}
          onKeyDown={(ev) => {
            let current = ev.currentTarget.value;
            if (ev.key == 'Backspace') {
              
              
              // if incorrecttext = 0, decrease userInput
              // if userinput = 0, decrease incorrecttext

              // outcomes
              // incorrect text and correct text
              // only incorrect text
              // only correct text

              if (incorrectText != '') {
                // there is incorrect text present
                console.log("incorrect text: " + incorrectText);
                setIncorrectText(incorrectText.slice(-1));
                console.log("Hello");
                
              } else {
                // there is only correct text
                console.log("userInput: " + userInput);
                console.log("user slice: " + userInput.slice(0, userInput.length - 1));
                setUserInput(userInput.slice(0, userInput.length - 1));
              }

            } 
          }}
          onInput={(ev) => {
            // value is the letter that was just typed
            let value = ev.currentTarget.value;

            // * THIS IS IMPORTANT INFORMATION
            // unwritten.charAt(0) is the character at that index
            // counter starts at 0
            // setUserInput is the text that has to be input



            if (value[value.length - 1] != unwritten.charAt(0)) {
              setIncorrectText(prevIncorrectText => prevIncorrectText + value[value.length - 1]);

            } else {
              
              setUserInput(value);
              console.log(userInput);
            }
          

            // ! THIS IS THE OLD DELETION CODE
            // if the input was correct, increment the counter
            // if (value.length > previousValue.length) {
            //   setCounter((prev) => prev + 1);
            // }
            // if (value.length < previousValue.length) {
            //   // deletion
            //   const deleteChar = previousValue[previousValue.length - 1]; 

            //   if (incorrectText.includes(deleteChar)) {
            //     // if the character deleted was incorrect text, remove it from incorrectText
            //     setIncorrectText(incorrectText.slice(-1));


            //   } else {
            //     // if the character deleted was correct, reset userInput
            //     setUserInput(value);
            //   }

            // } else {
            //   if (value[value.length - 1] != unwritten.charAt(0)) {
            //     setIncorrectText(prevIncorrectText => prevIncorrectText + value[value.length - 1]);
  
            //   } else {
                
            //     setUserInput(value);
            //     console.log(userInput);
            //   }

            // } 
            // update the previous value
            // setPreviousValue(value);
           
            console.log(counter);
            console.log(incorrectText);
            
  

            
            
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

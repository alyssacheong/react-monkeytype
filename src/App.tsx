import { useState, useEffect } from "react";
import { generate } from "random-words";
import "./index.css";
import logo from "./logo.png";
import refresh from "./refresh.png";
import LoremButton from "./components/LoremButton";
import CapitaliseButton from "./components/CapitaliseButton";
import CapslockButton from "./components/CapsLockButton";
import SentenceButton from "./components/SentenceButton";
import NormalButton from "./components/NormalButton";
import { lorem, paragraph } from "txtgen";
import * as React from "react";
import CalculateTime from "./CalculateTime";
// import text from "./text.tsx";

export default function App() {
  const [text, setText] = useState((generate(40) as string[]).join(" ")); // all the text that needs to be input
  const [userInput, setUserInput] = useState(""); // all the text user has currently input
  const unwritten = text.slice(userInput.length); // all the text user is yet to input
  const [lastButtonClicked, setLastButtonClicked] = useState("lorem"); // keep track of the last button clicked
  const [incorrectText, setIncorrectText] = useState("");

  // time logic
  const [time, setTime] = useState<number>(0);
  const [timerArray, setTimerArray] = useState<Array<number | string>>([]);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [finalTime, setFinalTime] = useState<number>(0);

  useEffect(() => {
    const timerArray: Array<number | string > = CalculateTime(time);
    setTimerArray(timerArray);
  }, [time]);

  const startTimer = () => {
    if (!isTyping) {
      setIsTyping(true);
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Update every 10ms (hundredths of a second)
      }, 10);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
      setFinalTime(time);
    }
  };

  const calculateWPM = (timeInMilliseconds: number): number => {
    const str = userInput;
    const words = str.split(' ');
    const numOfWords = words.length;
    const timeInMinutes = timeInMilliseconds / 60000;
    return Math.round(numOfWords / timeInMinutes);
  }

  // refresh logic
  const handleRefresh = () => {
    setUserInput(""); // Reset user input
    setIncorrectText(""); // Reset incorrect text
    setTime(0); // Reset timer
    stopTimer();
    setIsTyping(false);

    switch (lastButtonClicked) {
      case "normal":
        setText(
          generate({
            exactly: 44,
            join: " ",
            minLength: 2,
            maxLength: 8,
          })
        );
        break;
      case "lorem":
        setText(lorem(40, 40));
        break;
      case "capitalise":
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
        break;
      case "capslock":
        setText(
          generate({
            exactly: 44,
            wordsPerString: 1,
            formatter: (word) => word.toUpperCase(),
            join: " ",
          })
        );
        break;
      case "sentence":
        setText(paragraph(2));
        break;
      default:
        setText(
          generate({
            exactly: 44,
            join: " ",
            minLength: 2,
            maxLength: 8,
          })
        );
    }
  };

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
        <NormalButton
          setUserInput={setUserInput}
          setIncorrectText={setIncorrectText}
          setText={(text) => {
            setText(text);
            setLastButtonClicked("normal");
            setTime(0); // Reset timer
            stopTimer();
            setIsTyping(false);
          }}
        />
        <LoremButton
          setUserInput={setUserInput}
          setIncorrectText={setIncorrectText}
          setText={(text) => {
            setText(text);
            setLastButtonClicked("lorem");
            setTime(0); // Reset timer
            stopTimer();
            setIsTyping(false);
          }}
        />
        <CapitaliseButton
          setUserInput={setUserInput}
          setIncorrectText={setIncorrectText}
          setText={(text) => {
            setText(text);
            setLastButtonClicked("capitalise");
            setTime(0); // Reset timer
            stopTimer();
            setIsTyping(false);
          }}
        />
        <CapslockButton
          setUserInput={setUserInput}
          setIncorrectText={setIncorrectText}
          setText={(text) => {
            setText(text);
            setLastButtonClicked("capslock");
            setTime(0); // Reset timer
            stopTimer();
            setIsTyping(false);
          }}
        />
        <SentenceButton
          setUserInput={setUserInput}
          setIncorrectText={setIncorrectText}
          setText={(text) => {
            setText(text);
            setLastButtonClicked("sentence");
            setTime(0); // Reset timer
            stopTimer();
            setIsTyping(false);
          }}
        />
      </div>
      <p className="header-2"> Click on the text below to begin</p>
      <div className="timer-container">
        <p className="timer-text">
          {timerArray[0]}:{timerArray[1]}
        </p>
        {unwritten.length === 0 && (
          <div className="wpm-message">
            <p className="wpm-text">{calculateWPM(finalTime)} WPM</p>
          </div>
        )}
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
            if (ev.key === "Backspace") {
              // remove text
              if (incorrectText !== "") {
                setIncorrectText(incorrectText.slice(0, -1));
              } else if (userInput !== "") {
                setUserInput(userInput.slice(0, -1));
              }
              ev.preventDefault();
            }
          }}
          onInput={(ev: React.ChangeEvent<HTMLInputElement>) => {
            const value = ev.target.value;
            const currentIndex = userInput.length;
            startTimer();
            if (value[currentIndex] === text[currentIndex]) {
              setUserInput(userInput + value[currentIndex]);
            } else {
              setIncorrectText(incorrectText + value[currentIndex]);
            }
            if (unwritten.length === 1 && value[currentIndex] === text[currentIndex]) {
              stopTimer();
            }
          }}
        ></input>
      </div>
      <button className="refresh-button" onClick={handleRefresh}>
        <img src={refresh} className="refresh-button" alt="" />
      </button>
    </div>
  );
}

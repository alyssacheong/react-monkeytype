import { useState } from "react";
import { generate, count } from "random-words";
import React, { Component } from "react";
import "./index.css";
import logo from "./logo.png";
import { lorem, paragraph } from 'txtgen';


class App extends React.Component {
  constructor(props: string) {
    super(props);
    this.state = {
      text: "want that run then possible because say some who do real might even more still must people he play very before world day give become only very house do one he because real many any it few point over make would",
    };
  }

  handleTextChange = () => {
    this.setState({
      text: generate({ exactly: 44, join: " ", minLength: 2, maxLength: 8 }),
    });
  };

  handleTextChange1 = () => {
    this.setState({
      text: lorem(40,40),
    })
  }

  handleTextChange2 = () => {
    this.setState({
      text: generate({
        exactly: 44,
        wordsPerString: 1,
        formatter: (word, index) => {
          return index === 0
          ? word.slice(0,1).toUpperCase().concat(word.slice(1))
          : word;
        },
        join: " ",
      })
    });
  }

  handleTextChange3 = () => {
    this.setState({
      text: generate ({
        exactly: 44,
        wordsPerString: 1,
        formatter: (word) => word.toUpperCase(),
        join: " ",
      })
    });
  }

  handleTextChange4 = () => {
    this.setState({
      text: paragraph(2),
    })
  }
  

  render() {
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
          <button className="button" onClick={this.handleTextChange1}>
            lorem
          </button>

          <button className="button" onClick={this.handleTextChange2}>
            capitalise
          </button>

          <button className="button" onClick={this.handleTextChange3}>
            caps lock
          </button>

          <button className="button" onClick={this.handleTextChange4}>
            sentence
          </button>

        </div>

        <div className="paragraph">
          <p>{this.state.text}</p>
          <button className="refresh-button" onClick={this.handleTextChange}>
            refresh
          </button>
        </div>
      </div>
    );
  }
}

export default App;

// ! OLD STUFF
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [name, setName] = useState("");
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <p className="text">toasterfish</p>
//       <h1 className="header">toastertype</h1>

//       <p>{text}</p>

//       <button
//         onClick={() => {
//           setText(generate({ exactly: 44, join: " " }));
//         }}
//       >
//         refresh
//       </button>

//       <p>{counter}</p>
//       <button
//         onClick={() => {
//           setCounter((prev) => prev + 1);
//           setCounter((prev) => prev + 1);
//         }}
//       >
//         Increment
//       </button>
//       <p>Hello {name} </p>
//       <input
//         type="text"
//         onInput={(ev) => {
//           setName(ev.currentTarget.value);
//         }}
//       />
//     </div>
//   );
// }

import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  return (
    <div>
      <h1 className="header">Hello World!</h1>
      <p>{counter}</p>
      <button onClick={() => {
        setCounter((prev) => prev + 1);
        setCounter((prev) => prev + 1);

      }}>Increment</button>
      <p>Hello {name} </p>
      <input type="text" onInput={(ev) => {
        setName(ev.currentTarget.value);
      }}/>
    </div>
  );
}

export default App;

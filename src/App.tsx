import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [person, setPerson] = useState({
    name: { first: "Josh" },
    age: 23,
  });

  return (
    <div>
      <p>{person.name.first}</p>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter((prev) => {
            return prev + 1;
          });
        }}
      >
        Inc
      </button>
      <input
        type="text"
        onInput={(ev) => {
          const value = ev.currentTarget.value;

          setPerson((prev) => {
            prev.name.first = value;
            return { ...prev };
          });
        }}
      />
    </div>
  );
}

export default App;

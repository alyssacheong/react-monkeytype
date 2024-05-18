import { useState } from "react";
import { Card } from "./components/Card";

function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <div className="card">
        <p>OOGABOOGA</p>
      </div>
      <Card name="Josh" title="Nerd" link="https://dotmrjosh.com" />
      <Card name="Alyssa" title="also Nerd" />
      <Card name="Josh" title="Nerd" />
      <Card name="Josh" title="Nerd" />
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);
  // Counter is a variable and setcounter is a function jo ki resposible hai counter ko update krne ke liye
  // let counter = 15

  const addValue = () => {
    counter = counter + 1;
    setcounter(counter);
  };

  const removeValue = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>Chai or React</h1>
      <h2>Counter value:{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;

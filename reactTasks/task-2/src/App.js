import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [mulby2, setmulby2] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  // after every render
  useEffect(() => {
    console.log(" which runs after every render");
  });

  // only once
  useEffect(() => {
    console.log("Runs after component mount");

    return () => {
      console.log("Runs after component unmount");
    };
  }, []);

  //multiple dependencies
  useEffect(() => {
    console.log(
      `When there are multiple dependencies ${count} or ${mulby2} has changed`
    );
  }, [count, mulby2]);


  //single dependency
  useEffect(() => {
    setmulby2(() => count * 2);
    console.log("Runs when the count is updated");
  }, [count]);

  return (
    <div className="App">
      <p>Count:{count}</p>
      <button onClick={handleCount}>Increment</button>
      <p>Calculation :{mulby2}</p>
    </div>
  );
}

export default App;

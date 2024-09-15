import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0); // {statevariable, setterFunction }

  const handleButtonClick = () => {
    setCount(count + 1);
    console.log("clicked");
  };

  return (
    <>
      <h1>Hello!</h1>
      <div>This is amazing.</div>;
      <button className="btn-secondary" onClick={handleButtonClick}>
        Click Me!
      </button>
      <div>Count: {count}</div>
    </>
  );
};

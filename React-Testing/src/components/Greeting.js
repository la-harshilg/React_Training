import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changedText, setchangedText] = useState(false);

  const textchangeHandler = () => {
    setchangedText(true);
  };

  return (
    <>
      <h1>Hello World!!</h1>
      {!changedText && <Output>Learn React from scratch!!</Output>}
      {changedText && <Output>Text Changed</Output>}
      <button onClick={textchangeHandler}>Change Text</button>
    </>
  );
};

export default Greeting;

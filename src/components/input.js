import { useContext, useEffect, useState } from "react";
import StateContext from "../states/states-context";
import "../assets/searchBox.css";

//.................................................

const Input = (props) => {
  //.................................................

  const ctx = useContext(StateContext);

  const [input, setInput] = useState("");

  //.................................................

  const saveInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    ctx.getInput(input);
  }, [input]);

  const refreshStates = () => {
    ctx.updateIsDone(false);
    ctx.updateButtonStatus(false);
  };

  useEffect(() => {
    if (ctx.isDone) {
      setInput("");
    }
  }, [ctx.isDone]);

  console.log(ctx.isDone);
  console.log(ctx.buttonStatus);
  console.log(ctx.url);

  //.................................................

  return (
    <input
      className="input"
      value={input}
      onChange={saveInput}
      onFocus={refreshStates}
      placeholder="Enter your location . . ."
    />
  );
};

export default Input;

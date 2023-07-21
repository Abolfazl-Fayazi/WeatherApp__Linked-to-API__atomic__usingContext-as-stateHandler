import { useState, useEffect, useContext } from "react";
import StateContext from "../states/states-context";
import "../assets/searchBox.css";

//.................................................

const Button = () => {
  //.................................................

  const ctx = useContext(StateContext);

  const [buttonStatus, setButtonStatus] = useState(false);

  //.................................................

  useEffect(() => {
    ctx.isDone && ctx.updateButtonStatus(false);
  }, [ctx.isDone]);

  //.................................................

  return (
    <button
      className="checkButton"
      onClick={() => ctx.updateButtonStatus(true)}
    >
      Check!
    </button>
  );
};

export default Button;

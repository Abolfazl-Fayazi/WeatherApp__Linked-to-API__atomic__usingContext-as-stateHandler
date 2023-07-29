import { useState, useEffect, useContext } from "react";
import StateContext from "../states/states-context";
import "../assets/searchBox.css";
import { motion } from "framer-motion";

//---------------------------------------------------------------------------------

const Button = () => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);

  //......................................

  useEffect(() => {
    ctx.isDone && ctx.updateButtonStatus(false);
  }, [ctx.isDone]);

  //---------------------------------------------------------------------------------

  return (
    <motion.button
      className="checkButton"
      onClick={() => ctx.updateButtonStatus(true)}
      initial={{ fontSize: "1.3rem" }}
      whileHover={{
        fontSize: "1.5rem",
        textShadow: "0px 0px 5px rgb(0, 128, 255)",
        //backgroundColor: "rgb(0, 128, 255)",
        //color: "white",
        boxShadow: "0px 0px 10px rgb(0, 128, 255)",
        transitionDuration: 0,
      }}
      whileTap={{
        backgroundColor: "rgb(0, 128, 255)",
        color: "white",
      }}
    >
      Check!
    </motion.button>
  );
};

//---------------------------------------------------------------------------------

export default Button;

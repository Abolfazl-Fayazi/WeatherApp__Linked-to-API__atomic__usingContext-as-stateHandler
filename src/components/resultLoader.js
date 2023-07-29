import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import StateContext from "../states/states-context";
import "../assets/resultLoader.css";

//---------------------------------------------------------------------------------

const ResultLoader = () => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);

  //......................................

  useEffect(() => {
    ctx.isDone && ctx.updateIsLoading(false);
  }, [ctx.isDone]);

  //......................................

  const loaderVariants = {
    initial: {
      rotate: 0,
    },
    animation: {
      borderTopColor: ["#000000", "#1e90ff", "#fff", "#1e90ff", "#000000"],
      rotate: 360,

      transition: {
        loop: 2,
        repeat: Infinity,
        duration: 0.5,
        ease: "linear",
      },
    },
  };

  //......................................

  if (ctx.isLoading) {
    return (
      <div className="container">
        <motion.div
          className="circle"
          variants={loaderVariants}
          initial="initial"
          animate="animation"
        ></motion.div>
      </div>
    );
  }
};

//---------------------------------------------------------------------------------

export default ResultLoader;

import { useState, useContext, useEffect } from "react";
import StateContext from "../states/states-context";
import "../assets/searchBox.css";
import goToCityArrowIcon from "../assets/goToCityArrowIcon.svg";
import { animate, motion } from "framer-motion";

//---------------------------------------------------------------------------------

const Suggestions = () => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);

  //---------------------------------------------------------------------------------

  const press = (e) => {
    ctx.getUrl(e.target.value);
    ctx.updateButtonStatus(true);
  };

  //......................................

  useEffect(() => {
    ctx.isDone && ctx.getUrl("");
  }, [ctx.isDone]);

  //......................................

  //console.log(ctx.suggestionsList);

  //......................................

  const suggestionsListVariants = {
    initial: { scaleY: 0 },
    animate: {
      scaleY: 1,
      originY: 0,
      transition: { duration: 0.5, ease: "linear" },
    },
  };

  //......................................

  if (ctx.suggestionsList.length > 0) {
    return (
      <div className="suggestionsWrapper">
        {ctx.suggestionsList.map((s) => (
          <motion.div
            className="suggestions"
            initial="initial"
            animate="animate"
            variants={suggestionsListVariants}
          >
            <div>
              <motion.button
                className="suggestion"
                value={s.url}
                onClick={press}
                whileHover={{
                  scale: 1.05,
                  originX: 0,
                  boxShadow: "0px 0px 10px rgb(30, 144, 255)",
                }}
                whileTap={{
                  color: "white",
                  backgroundColor: "rgb(30, 144, 255)",
                  transitionDuration: 3,
                }}
              >
                {s.name + " ," + s.region + " ," + s.country}
                <motion.img src={goToCityArrowIcon} />
              </motion.button>
            </div>
            <hr className="line" />
          </motion.div>
        ))}
      </div>
    );
  }
};

//---------------------------------------------------------------------------------

export default Suggestions;

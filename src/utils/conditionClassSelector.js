import React, { useContext } from "react";
import StateContext from "../states/states-context";

//---------------------------------------------------------------------------------

const ConditionClass = (props) => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);

  //......................................

  if (
    props.ultimateResult.condition.toString().toLowerCase().includes("cloud")
  ) {
    ctx.getConditionClass("condition__cloudy");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().includes("wind")
  ) {
    ctx.getConditionClass("condition__windy");
  } else if (
    props.ultimateResult.condition
      .toString()
      .toLowerCase()
      .includes("rain" || "shower" || "drizzle")
  ) {
    ctx.getConditionClass("condition__rainy");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().includes("clear")
  ) {
    ctx.getConditionClass("condition__clear");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().includes("sun")
  ) {
    ctx.getConditionClass("condition__sunny");
  } else if (
    props.ultimateResult.condition
      .toString()
      .toLowerCase()
      .includes("fog" || "haze" || "dust")
  ) {
    ctx.getConditionClass("condition__foggy");
  }
};

//---------------------------------------------------------------------------------

export default ConditionClass;

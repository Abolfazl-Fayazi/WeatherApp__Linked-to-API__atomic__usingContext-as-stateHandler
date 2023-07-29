import React, { useContext } from "react";
import StateContext from "../states/states-context";

import cloudIcon from "../assets/cloudIcon.svg";
import sunIcon from "../assets/sunIcon.svg";
import moonIcon from "../assets/moonIcon.svg";
import dayPartlyCloudyIcon from "../assets/dayPartlyCloudyIcon.svg";
import nightPartlyCloudyIcon from "../assets/nightPartlyCloudyIcon.svg";
import rainIcon from "../assets/rainIcon.svg";
import windIcon from "../assets/windIcon.svg";
import refreshIcon from "../assets/refreshIcon.svg";

//---------------------------------------------------------------------------------

const ConditionIcon = (props) => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);

  //......................................

  if (
    props.ultimateResult.condition
      .toString()
      .toLowerCase()
      .includes("partly cloudy") ||
    props.ultimateResult.isDay === 1
  ) {
    ctx.getConditionIcon("../assets/dayPartlyCloudyIcon.svg");
  } else if (
    props.ultimateResult.condition
      .toString()
      .toLowerCase()
      .includes("partly cloudy") ||
    props.ultimateResult.isDay === 0
  ) {
    ctx.getConditionIcon("../assets/nightPartlyCloudyIcon.svg");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().includes("clear") ||
    props.ultimateResult.isDay === 0
  ) {
    ctx.getConditionIcon("../assets/moonIcon.svg");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().includes("clear") ||
    props.ultimateResult.isDay === 1
  ) {
    ctx.getConditionIcon("../assets/sunIcon.svg");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().includes("wind")
  ) {
    ctx.getConditionIcon("../assets/windIcon.svg");
  } else if (
    props.ultimateResult.condition
      .toString()
      .toLowerCase()
      .includes("rain" || "shower" || "drizzle")
  ) {
    ctx.getConditionIcon("../assets/rainIcon.svg");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().match("cloudy")
  ) {
    ctx.getConditionIcon("../assets/cloudIcon.svg");
  } else if (
    props.ultimateResult.condition.toString().toLowerCase().match("sunny")
  ) {
    ctx.getConditionIcon("../assets/sunIcon.svg");
  }
};

//---------------------------------------------------------------------------------

export default ConditionIcon;

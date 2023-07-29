import { useContext, useEffect, useState } from "react";
import StateContext from "../states/states-context";
import "../assets/searchResult.css";
import { motion } from "framer-motion";
import ConditionClass from "../utils/conditionClassSelector";
import ConditionIcon from "../utils/conditionIconSelector";

//---------------------------------------------------------------------------------

const SearchResult = () => {
  //---------------------------------------------------------------------------------

  const ctx = useContext(StateContext);
  const [ultimateResult, setUltimateResult] = useState({});

  //---------------------------------------------------------------------------------

  useEffect(() => {
    //console.log(ctx.result);

    ctx.result.current &&
      setUltimateResult({
        cityName: ctx.result.location.name + ", ",
        regionName: ctx.result.location.region + ", ",
        countryName: ctx.result.location.country,
        dateAndTime: ctx.result.location.localtime,
        currentTemp: "Current temperature: " + ctx.result.current.temp_c + "°C",
        realFeel: "RealFeel: " + ctx.result.current.feelslike_c + "°C",
        windSpeed: "Wind Speed: " + ctx.result.current.wind_kph + " km/h",
        UVindex: "UV index: " + ctx.result.current.uv,
        humidity: "Humidity: " + ctx.result.current.humidity + "%",
        condition: ctx.result.current.condition.text,
        isDay: ctx.result.current.is_day,
      });
  }, [ctx.result.current]);

  //......................................

  const resultVariants = {
    initial: {
      opacity: 0,
    },
    animation: {
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  //---------------------------------------------------------------------------------
  if (ultimateResult.cityName) {
    return (
      <motion.div
        className="wrapper"
        variants={resultVariants}
        initial="initial"
        animate="animation"
        key={ultimateResult.cityName}
      >
        <div className="card">
          <h1>
            {ultimateResult.cityName +
              ultimateResult.regionName +
              ultimateResult.countryName}
          </h1>
          <h2>{ultimateResult.dateAndTime}</h2>
          <div className="sectioner">
            <div>
              <h3>{ultimateResult.currentTemp}</h3>
              <h3>{ultimateResult.realFeel}</h3>
              <div className="windUVhumidity">
                <h3>{ultimateResult.windSpeed}</h3>
                <h3>{ultimateResult.UVindex}</h3>
                <h3>{ultimateResult.humidity}</h3>
              </div>
              <div>
                <ConditionClass ultimateResult={ultimateResult} />
                <h2 className={ctx.conditionClass}>
                  {ultimateResult.condition}
                </h2>
              </div>
            </div>
            <div className="conditionIcon">
              <img src={ctx.conditionIcon} />
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
};

//---------------------------------------------------------------------------------

export default SearchResult;

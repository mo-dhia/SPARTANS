import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Navigation from "./components/Navigation";
import axios from "axios";
import useWindowDimensions from "./components/windowDimensions";

import FirstPage from "./components/pages/FirstPage";
import SecondPage from "./components/pages/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";
import ForthPage from "./components/pages/ForthPage";
import FifthPage from "./components/pages/FifthPage";

const App = () => {
  const prevScrollY = useRef(0);
  const [schedule, setSchedule] = useState(false);

  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("50n");

  const [page, setPage] = useState(3);
  const [goingUp, setGoingUp] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    getWeather();
    const scheduleStorage = JSON.parse(localStorage.getItem("schedule"));
    if (scheduleStorage) {
      setSchedule(scheduleStorage);
      console.log(localStorage.getItem("schedule"))
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;
      //console.log(goingUp, currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  useEffect(() => {
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }, [schedule]);

  async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=36.765384&lon=10.193044&appid=${"ace6e6977f5970b3791f425977bebbae"}&units=metric`;
    try {
      const response = await axios.get(url);
      setTemp(response.data.current.temp);
      setWeatherIcon(response.data.current.weather[0].icon);
    } catch (error) {
      console.log(error);
    }
  }

  const moveSchedule = (position) => {
    // const reFormatSchedule = schedule;
    const result = [];
    if (position === "Right")
      for (let i = 1; i < schedule.length + 1; i++) {
        i === schedule.length
          ? result.push(schedule[0])
          : result.push(schedule[i]);
      }
    else if (position === "Left")
      for (let i = 1; i < schedule.length + 1; i++) {
        i === schedule.length
          ? result.push(schedule[0])
          : result.push(schedule[i]);
      }
    setSchedule(result);
  };

  return (
    <div>
      <button onClick={()=>setSchedule(!schedule)} 
      style={{ position: "absolute", left: "40%", top: "20%" }}>
        qsdaze
      </button>
      <Navigation width={width} height={height} page={page} setPage={setPage} />
      <FirstPage
        width={width}
        height={height}
        temp={temp}
        weatherIcon={weatherIcon}
        schedule={
          schedule[new Date().getDay()]
            ? schedule[new Date().getDay()]
            : "Waiting"
        }
        moveSchedule={moveSchedule}
      />

      <SecondPage />
      <ThirdPage />
      <ForthPage />
      <FifthPage />

      {/* <div
        style={{
          backgroundColor: "lavenderblush",
          transform: "rotate(118deg)",
          padding: "40px",
          position: "absolute",
          right: "0",
          top: "0%",
          left: "-199%",
          width: "600%",
        }}
      /> */}

      {/* <div
        style={{
          backgroundColor: "#b22c33",
          transform: "rotate(118deg)",
          padding: "40px",
          position: "absolute",
          right: "0",
          top: "0%",
          left: "-185%",
          width: "600%",
        }}
      /> */}
      {/* polygon(100% 0, 100% 3%, 0 64%, 0 61%) */}
      <div
        style={{
          backgroundColor: "lavenderblush",
          clipPath: "polygon(100% 0, 100% 3.5%, 0 64.5%, 0 60%)",
          position: "absolute",
          width: " 8%",
          top: "7.84vh",
          left: "auto",
          right: "0",
          bottom: "auto",
          height: " 400vh",
          width: " 100vw",
          zIndex: "-1",
        }}
      />
      <div
        style={{
          backgroundColor: "#b22c33",
          clipPath: "polygon(100% 0, 100% 4%, 0 65%, 0 61%)",
          position: "absolute",
          width: " 8%",
          top: "52vh",
          left: "auto",
          right: "0",
          bottom: "auto",
          height: " 400vh",
          width: " 100vw",
          zIndex: "-1",
        }}
      />
    </div>
  );
};

export default App;

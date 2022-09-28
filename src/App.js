import React, { useState, useEffect, useRef } from "react";

import Navigation from "./components/Navigation";
import axios from "axios";
import useWindowDimensions from "./components/windowDimensions";

import FirstPage from "./components/pages/FirstPage/FirstPage";
import SecondPage from "./components/pages/SecondPage/SecondPage";
import ThirdPage from "./components/pages/ThirdPage";
import ForthPage from "./components/pages/ForthPage";
import FifthPage from "./components/pages/FifthPage";

const App = () => {
  const prevScrollY = useRef(0);
  const [schedule, setSchedule] = useState(false);

  const [quote, setQuote] = useState({});

  const [temp, setTemp] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("50n");

  const [page, setPage] = useState(1);
  const [goingUp, setGoingUp] = useState(false);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    getQuote();
    getWeather();
    const scheduleStorage = JSON.parse(localStorage.getItem("schedule"));
    if (scheduleStorage) {
      setSchedule(scheduleStorage);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const page1 = height / 3;
      const page2 = height / 3 + height;
      const page3 = height / 3 + height * 2;
      const page4 = height / 3 + height * 3;

      const currentScrollY = window.scrollY;
      if (currentScrollY < page1) {
        setPage(1);
      } else if (currentScrollY > page1 && currentScrollY < page2) {
        setPage(2);
      } else if (currentScrollY > page2 && currentScrollY < page3) {
        setPage(3);
      } else if (currentScrollY > page3 && currentScrollY < page4) {
        setPage(4);
      } else if (currentScrollY > page4) {
        setPage(5);
      }

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

  async function getQuote() {
    const url = `https://stoicquotesapi.com/v1/api/quotes/random`;
    try {
      const response = await axios.get(url);
      setQuote(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const moveSchedule = (position) => {
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

  // const zz = [{ 1: "a", 2: "a" }, { 1: "b", 2: "b" }, { 1: "c", 2: "c" }]
  // console.log(zz[new Date().getDay()])
  console.log(new Date().getDay())
  return (
    <div>
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

      <SecondPage quote={quote} />
      <ThirdPage />
      <ForthPage />
      <FifthPage />


      <div
        style={Object.assign({
          backgroundColor: "lavenderblush",
          position: "absolute",
          left: "auto",
          right: "0",
          bottom: "auto",
          height: " 400vh",
          width: " 100vw",
          zIndex: "-1",
          transition: "2s",
          clipPath: "polygon(100% 0, 100% 6%, 0 85%, 5% 80%)",
        }, page === 2 ? { top: "70vh", } :
          page === 3 ? { top: "140vh", } :
            page === 4 ? { top: "210vh" } :
              page === 5 ? { display: "none" } :
                { clipPath: "polygon(100% 0, 100% 6%, 0 85%, 0 80%)", top: "0vh", })}
      />
      <div
        style={Object.assign({
          backgroundColor: "#b22c33",
          position: "absolute",
          left: "auto",
          right: "0",
          bottom: "auto",
          height: " 400vh",
          width: " 100vw",
          zIndex: "-1",
          transition: "2s",
          clipPath: "polygon(100% 0, 100% 6%, 0 85%, 5% 80%)",
        }, page === 2 ? { top: "134vh", } :
          page === 3 ? { top: "204vh", } :
            page === 4 ? { top: "274vh", } :
              page === 5 ? { display: "none" } :
                { clipPath: "polygon(100% 0, 100% 6%, 0 85%, 0 80%)", top: "54vh", })}
      />
    </div>
  );
};

export default App;

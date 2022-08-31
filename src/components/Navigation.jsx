import React, { useState } from "react";
import UserIcon from "../assets/images/user.svg";

export default function Navigation({
  firstPage,
  secondPage,
  thirdPage,
  forthPage,
  fifthPage,
}) {
  const [pagesHover, setPagesHover] = useState(false);
  const [firstPageHover, setFirstPageHover] = useState(false);
  const [secondPageHover, setSecondPageHover] = useState(false);
  const [thirdPageHover, setThirdPageHover] = useState(false);
  const [forthPageHover, setForthPageHover] = useState(false);
  const [fifthPageHover, setFifthPageHover] = useState(false);

  const [menuHover, setMenuHover] = useState(false);
  const [userHover, setuserHover] = useState(false);
  const [SettingsHover, setSettingsHover] = useState(false);

  console.log(firstPageHover)
  return (
    <div>
      {/* top Left */}
      <div
        style={{
          cursor: "pointer",
          position: "fixed",
          color: "#b22c33",
          top: "1%",
          left: "0.5%",
          filter: "drop-shadow(3px 7px 2px rgb(0 0 0 / 0.4))",
        }}
      >
        <img
          onMouseOut={() => {
            setMenuHover(false);
            setuserHover(false);
          }}
          onMouseOver={() => {
            setMenuHover(true);
            setuserHover(true);
          }}
          style={Object.assign(
            {
              cursor: "pointer",
              display: "inline-block",
              width: "25px",
              marginTop: "15px",
              transition: "transform .3s",
            },
            menuHover
              ? userHover
                ? { opacity: "1", transform: "scale(1.8)" }
                : { opacity: "1" }
              : { opacity: "0.5" }
          )}
          src={UserIcon}
        />
        {/* { opacity: "1", transform: "scale(1.8)" } */}
        <hr
          onMouseOut={() => {
            setMenuHover(false);
            setSettingsHover(false);
          }}
          onMouseOver={() => {
            setMenuHover(true);
            setSettingsHover(true);
          }}
          style={Object.assign(
            {
              cursor: "pointer",
              opacity: "0.5",
              display: "inline-block",
              width: "25px",
              border: "4px solid white",
              borderRadius: "2px",
              marginLeft: "20px",
              transition: "transform .3s",
            },
            menuHover
              ? SettingsHover
                ? { opacity: "1", transform: "scale(1.8)" }
                : { opacity: "1" }
              : { opacity: "0.5" }
          )}
        />
      </div>
      {/* Navigation Left */}
      <div
        style={{
          cursor: "pointer",
          color: "white",
          margin: "0",
          textShadow:
            "0px 18px 5px rgba(0,0,0,0.1), 10px 20px 5px rgba(0,0,0,0.05), -10px 20px 5px rgba(0,0,0,0.05)",
          fontFamily: "'Righteous', cursive",
        }}
      >
        <h1
          onMouseOut={() => {
            setPagesHover(false);
            setFirstPageHover(false);
          }}
          onMouseOver={() => {
            setPagesHover(true);
            setFirstPageHover(true);
          }}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "1%",
              top: "30%",
            },
            pagesHover
              ? firstPageHover 
                ? { opacity: "1", transform: "scale(1.8)" }
                : { opacity: "1" }
              : { opacity: "0.5" }
          )}
        >
          .
        </h1>
        <h1
          onMouseOut={() => {
            setPagesHover(false);
            setSecondPageHover(false);
          }}
          onMouseOver={() => {
            setPagesHover(true);
            setSecondPageHover(true);
          }}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "0.75%",
              top: "29%",
              transform: "scale(3)",
            },
            {}
          )}
        >
          .
        </h1>
        <h1
          onMouseOut={() => {
            setPagesHover(false);
            setThirdPageHover(false);
          }}
          onMouseOver={() => {
            setPagesHover(true);
            setThirdPageHover(true);
          }}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "1%",
              top: "40%",
            },
            {}
          )}
        >
          .
        </h1>
        <h1
          onMouseOut={() => {
            setPagesHover(false);
            setForthPageHover(false);
          }}
          onMouseOver={() => {
            setPagesHover(true);
            setForthPageHover(true);
          }}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "1%",
              top: "45%",
            },
            {}
          )}
        >
          .
        </h1>
        <h1
          onMouseOut={() => {
            setPagesHover(false);
            setFifthPageHover(false);
          }}
          onMouseOver={() => {
            setPagesHover(true);
            setFifthPageHover(true);
          }}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              left: "1%",
              top: "50%",
            },
            {}
          )}
        >
          .
        </h1>
      </div>
    </div>
  );
}

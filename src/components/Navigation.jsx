import React, { useState } from "react";
import UserIcon from "../assets/images/user.svg";

export default function Navigation({ page, setPage }) {
  const [pagesHover, setPagesHover] = useState(false);

  const [menuHover, setMenuHover] = useState(false);
  const [userHover, setuserHover] = useState(false);
  const [SettingsHover, setSettingsHover] = useState(false);

  console.log(page);
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
        onMouseOut={() => {
          setPagesHover(false);
        }}
        onMouseOver={() => {
          setPagesHover(true);
        }}
        style={Object.assign(
          {
            cursor: "pointer",
            color: "white",
            margin: "0",
            textShadow:
              "0px 18px 5px rgba(0,0,0,0.1), 10px 20px 5px rgba(0,0,0,0.05), -10px 20px 5px rgba(0,0,0,0.05)",
            fontFamily: "'Righteous', cursive",
          },
          pagesHover ? { opacity: "1" } : { opacity: "0.5" }
        )}
      >
        <div
          onClick={() => setPage(1)}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "30px",
            },
            page === 1
              ? {
                  left: "0.7%",
                  top: "29%",
                  transform: "scale(3)",
                  zIndex: "-1",
                }
              : { left: "1%", top: "35%", zIndex: "2" }
          )}
        >
          .
        </div>
        <div
          onClick={() => setPage(2)}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "30px",
            },
            page === 2
              ? { left: "0.7%", top: "34%", transform: "scale(3)" ,zIndex: "-1",}
              : { left: "1%", top: "40%", zIndex: "2" }
          )}
        >
          .
        </div>
        <div
          onClick={() => setPage(3)}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "30px",
            },
            page === 3
              ? { left: "0.7%", top: "39%", transform: "scale(3)" ,zIndex: "-1",}
              : { left: "1%", top: "45%", zIndex: "2" }
          )}
        >
          .
        </div>
        <div
          onClick={() => setPage(4)}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "30px",
            },
            page === 4
              ? { left: "0.7%", top: "44%", transform: "scale(3)" ,zIndex: "-1",}
              : { left: "1%", top: "50%", zIndex: "2" }
          )}
        >
          .
        </div>
        <div
          onClick={() => setPage(5)}
          style={Object.assign(
            {
              transition: "transform .3s",
              cursor: "pointer",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              fontSize: "30px",
            },
            page === 5
              ? { left: "0.7%", top: "49%", transform: "scale(3)" ,zIndex: "-1",}
              : { left: "1%", top: "55%", zIndex: "2" }
          )}
        >
          .
        </div>
      </div>
    </div>
  );
}

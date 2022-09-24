import React, { useState } from "react";

export default function FirstPage({
  schedule,
  weatherIcon,
  temp,
  moveSchedule,
}) {
  const [leftArrowHover, setLeftArrowHover] = useState(false);
  const [rightArrowHover, setRightArrowHover] = useState(false);

  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          margin: "0",
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textShadow:
            "0px 18px 5px rgba(0,0,0,0.1), 10px 20px 5px rgba(0,0,0,0.05), -10px 20px 5px rgba(0,0,0,0.05)",
          fontFamily: "'Righteous', cursive",
        }}
      >
        <div
          style={{
            color: " white",
            fontSize: "45px",
            textAlign: "center",
          }}
        >
          {"SPARTANS".split("").map((e, i) => (
            <div
              className={i >= 6 ? "ns" : ""}
              style={Object.assign(
                {
                  filter: "drop-shadow(1px 9px 2px rgb(0 0 0 / 0.4))",
                  display: "inline-block",
                },
                i >= 6 ? { color: "#b22c33" } : null
              )}
              key={i}
            >
              {e}
            </div>
          ))}
        </div>
        <div
          style={{
            color: "white",
            fontFamily: "'Shadows Into Light', cursive",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          <div
            onClick={() => moveSchedule("Left")}
            style={Object.assign(
              {
                transition: "transform .2s",
                cursor: "pointer",
                display: "inline-block",
              },
              leftArrowHover
                ? { transform: "scale(3)", color: "#b22c33" }
                : null
            )}
            onMouseOver={() => setLeftArrowHover(true)}
            onMouseOut={() => setLeftArrowHover(false)}
          >
            {"<"}
          </div>
          &nbsp;
          {schedule["1"]
            ? schedule["1"].split("").map((e, i) => (
                <div
                  style={Object.assign(
                    { display: "inline-block" },
                    i >= schedule["1"].length - 2 ? { color: "#b22c33" } : null
                  )}
                  key={i}
                >
                  {e}
                </div>
              ))
            : null}
          &nbsp;
          {schedule["2"] ? "/ " : null}
          {schedule["1"]
            ? schedule["2"]
              ? schedule["2"].split("").map((e, i) => (
                  <div
                    style={Object.assign(
                      { display: "inline-block" },
                      i >= schedule["2"].length - 2
                        ? { color: "#b22c33" }
                        : null
                    )}
                    key={i}
                  >
                    {e}
                  </div>
                ))
              : "-\xa0Day".split("").map((e, i) => (
                  <div
                    style={Object.assign(
                      { display: "inline-block" },
                      i >= 4 ? { color: "#b22c33" } : null
                    )}
                    key={i}
                  >
                    {e}
                  </div>
                ))
            : "No Schedule"}
          &nbsp;
          <div
            onClick={() => moveSchedule("Right")}
            style={Object.assign(
              {
                transition: "transform .2s",
                cursor: "pointer",
                display: "inline-block",
              },
              rightArrowHover
                ? { transform: "scale(3)", color: "#b22c33" }
                : null
            )}
            onMouseOver={() => setRightArrowHover(true)}
            onMouseOut={() => setRightArrowHover(false)}
          >
            {">"}
          </div>
        </div>
      </div>

      {/* weather section */}
      <h5
        style={{
          position: "fixed",
          color: "#b22c33",
          bottom: "-1%",
          filter: "drop-shadow(3px 7px 2px rgb(0 0 0 / 0.4))",
        }}
      >
        <img
          src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
          width={40}
          height={40}
          style={{ marginBottom: "-8%", position: "relative" }}
        />{" "}
        &nbsp;
        {`${new Date().toLocaleString("default", { weekday: "long" })}  `}
        &nbsp; <span style={{ fontSize: "15px" }}>{temp.toFixed()}</span>
        <span>°</span>
      </h5>
    </div>
  );
}

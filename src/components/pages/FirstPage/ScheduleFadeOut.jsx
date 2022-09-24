import React from "react";

function ScheduleFadeOut() {
  const styles = {
    border: "1px solid ",
    padding: " 20px",
    textAlign: "center",
    margin: "5px",
    backgroundColor: "#ccc",
    filter: "blur(1px)",
    color: "white",
  };
  let OneDayBack = new Date();
  OneDayBack.setDate(OneDayBack.getDate() - 1);
  let TwoDaysBack = new Date();
  TwoDaysBack.setDate(TwoDaysBack.getDate() - 2);
  let ThreeDaysBack = new Date();
  ThreeDaysBack.setDate(ThreeDaysBack.getDate() - 3);
  let OneDayForward = new Date();
  OneDayForward.setDate(OneDayForward.getDate() + 1);
  let TwoDaysForward = new Date();
  TwoDaysForward.setDate(TwoDaysForward.getDate() + 2);
  let ThreeDaysForward = new Date();
  ThreeDaysForward.setDate(ThreeDaysForward.getDate() + 3);
  
  return (
    <div
      style={{
        margin: "0 auto",
        position: "absolute",
        top: "65%",
        left: "50%",
        display: "grid",
        gridTemplateColumns: "auto auto auto auto auto auto auto",
        padding: "10px",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div style={styles}>
        {OneDayBack.toLocaleString("default", { weekday: "long" })}
      </div>
      <div style={styles}>
        {TwoDaysBack.toLocaleString("default", { weekday: "long" })}
      </div>
      <div style={styles}>
        {ThreeDaysBack.toLocaleString("default", { weekday: "long" })}
      </div>
      <div style={styles}>
        {new Date().toLocaleString("default", { weekday: "long" })}
      </div>
      <div style={styles}>
        {OneDayForward.toLocaleString("default", { weekday: "long" })}
      </div>
      <div style={styles}>
        {TwoDaysForward.toLocaleString("default", { weekday: "long" })}
      </div>
      <div style={styles}>
        {ThreeDaysForward.toLocaleString("default", { weekday: "long" })}
      </div>
    </div>
  );
}

export default ScheduleFadeOut;

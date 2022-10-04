import React, { useState } from "react";
import Biceps from "../../../assets/images/BodyParts/Biceps.png"
import Cards from "./Cards"
export default function SecondPage({ quote, page }) {
  const [modal, setModal] = useState(false);

  const style = {
    height: "100px", width: "100px",
    borderRadius: " 16px",
    background: "rgba(255, 255, 255, 0.2)",
    boxShadow: " 0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: " blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    display: "inline-block", marginLeft: "20px", marginTop: "40px"
  }

  const bodyMuscles = ["Legs", "Calves", "Glutes", "Abs", "Obliques", "L Back", "Back",
    "Chest", "Deltoids", "Rear Delts", "Traps", "Biceps", "Triceps"]
  //console.log(quote.body)
  return (
    <div
      style={Object.assign({
        color: "white",
        height: "100vh",
        marginLeft: "6%",
        transition: "2s",
      }, page >= 2 && page < 4 ? { opacity: 1 } : { opacity: 0 })}
    >

      <div style={{ marginTop: "50px", fontFamily: "'Righteous', cursive", fontSize: "70px" }}>
        Week Schedule
      </div>
      <div style={{ fontFamily: "'Righteous', cursive", fontSize: "25px", width: "60%", marginTop: "20px" }}>
        <i>{quote.body}</i>
      </div>
      <div style={{ width: "55%", position: "absolute", bottom: "-90%", }}>

        <Cards setModal={setModal} />
      </div>



      <div style={Object.assign({
        position: 'fixed',
        height: "550px",
        width: "400px",
        borderRadius: " 16px",
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: " 0 3px 7px rgba(1, 1, 1, 1)",
        backdropFilter: " blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "40%",
        transition: "0.5s",
      }, modal ? { zIndex: "100", opacity: "1" } : { zIndex: "-100", opacity: "0" })}>
        <div style={{ float: "right" }} onClick={() => setModal(false)}>
          close
        </div>
      </div>
    </div>
  );
}

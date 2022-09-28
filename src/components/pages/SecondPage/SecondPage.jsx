import React from "react";
import Biceps from "../../../assets/images/BodyParts/Biceps.png"
import Cards from "./Cards"
export default function SecondPage({ quote }) {

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
      style={{
        color: "white",
        height: "100vh",
        marginLeft: "6%"
      }}
    >
      
      <div style={{ marginTop: "50px", fontFamily: "'Righteous', cursive", fontSize: "70px" }}>
        Week Schedule
      </div>
      <div style={{ fontFamily: "'Righteous', cursive", fontSize: "25px", width: "60%", marginTop:"20px" }}>
        <i>{quote.body}</i> 
      </div>
      <div style={{ width: "55%", position: "absolute", bottom: "-90%", }}>

        <Cards />
      </div>



      {/* <div style={{
        position: 'absolute',
        height: "550px",
        width: "400px",
        borderRadius: " 16px",
        background: "rgba(255, 255, 255, 0.2)",
        boxShadow: " 0 3px 7px rgba(1, 1, 1, 1)",
        backdropFilter: " blur(5px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        transform: "translate(-50%, -50%)",
        top: "160%",
        left: "40%",
        zIndex: "100"

      }}>

      </div> */}
    </div>
  );
}

import './Cards.css';
import React, { useState } from "react";

function App() {
  const [activePanel, setActivePanel] = useState(new Date().getDay());

  return (
    <div >
      <div className="panel-container">
        <div onClick={() => setActivePanel(1)} className={activePanel === 1 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')" }}>
          <h3>Monday</h3>
        </div>
        <div onClick={() => setActivePanel(2)} className={activePanel === 2 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1585152968992-d2b9444408cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')" }}>
          <h3>Tuesday</h3>
        </div>
        <div onClick={() => setActivePanel(3)} className={activePanel === 3 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')" }}>
          <h3>Thursday</h3>
        </div>
        <div onClick={() => setActivePanel(4)} className={activePanel === 4 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')" }}>
          <h3>Wendsday</h3>
        </div>
        <div onClick={() => setActivePanel(5)} className={activePanel === 5 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80')" }}>
          <h3>Friday</h3>
        </div>
        <div onClick={() => setActivePanel(6)} className={activePanel === 6 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1533560904424-a0c61dc306fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')" }}>
          <h3>Saturday</h3>
        </div>
        <div onClick={() => setActivePanel(0)} className={activePanel === 0 ? "panel active" : "panel"} style={{ backgroundImage: 
          "url('https://images.unsplash.com/photo-1585194913451-3866665d1c76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')" }}>
          <h3>Sunday</h3>
        </div>

      </div>
    </div>
  );
}

export default App;

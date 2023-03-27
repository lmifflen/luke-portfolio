import React from "react";
import "./Intro.css";
// import "./intro.scss";

const Intro = () => {
  return (
    <div className="container" id="home">
      <div className="left">
        <div className="imageContainer">
          <img src="./LukePhoto.png" alt="Luketest" />
        </div>
      </div>
      <div className="right">
        <h1>
          {" "}
          HELLO <br></br>I'M LUKE{" "}
        </h1>
        <div className="FSD"> Full Stack Developer </div>
        <div className="PM"> Technical Project Manager </div>
        <div className="FSD"> Adventurer </div>
      </div>
      
    </div>
  );
};

export default Intro;

import React, { useState } from "react";
import "./Portfolio.css";



const Portfolio = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const data = [
    {
      id: "1",
      title: "A Full Stack Web Application Built Using:",
      desc: `JavaScript, ReactJS, NodeJS, ExpressJS, MySQL, REST API, Git, 
            Socket.io, Passport, Trello`,
      roles: "Roles:  Project Manager  Full Stack Developer Scrum Master",

      img: "./Wink.PNG",
      link: `https://www.youtube.com/watch?v=Nv7JzOsvkq4`,
    },
    {
      id: "2",
      title: "A Full Stack Web Application Built Using:",
      desc: `JavaScript, ReactJS, NodeJS, ExpressJS, REST API, Git, MongoDB,
      Mapbox, Auth0, Trello, Heroku`,
      roles: "Roles: Project Manager  Full Stack Developer Scrum Master",
      img: "./Cycle.PNG",
      link: `https://city-cycle-client.herokuapp.com/`,
    },
    {
      id: "3",
      title: "My Github",
      desc: "Check out my latest work on Github!",
      img: "./Git.PNG",
      link: `https://github.com/lmifflen`,
    },
  ];

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = (event) => {
    event === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 1)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  }; //If click left and current slider is less than 0, then move to #2. Else, minus 1. Else (right click) if current slider is less than data.length, +1. Else, = 0 (max, go back to 0)
  // const roles = data.roles ?  (
  //   <div>
  //     <div> Roles: </div>
  //     <div> {data.roles} </div>{" "}
  //   </div>
  // ) : (
  //   <div>{data.roles}</div>
  // );

  return (
    <div className="profile" id="projects">
      <div
        className="card"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((data) => (
          <div className="card-container" key={data.id}>
            <div className="item" onClick={() => openInNewTab(data.link)}>
              <div className="image-container">
                <img src={data.img} alt={""} id={data.id} />
              </div>
              <div>
                <div className="text-container">
                  <div> {data.title} </div>
                  <div> {data.desc} </div>
           
  
                  <div> {data.roles} </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="angle-left-solid.svg"
        className="arrow-left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="angle-right-solid.svg"
        className="arrow-right"
        alt=""
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Portfolio;

import "./styles.css";
import axios from "axios";
import { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Trending from "./components/trending";
import Tech from "./components/tech";
import LeftButtons from "./components/leftbuttons";
import { sidebtns } from "./sidebuttons";
import logo from './images/logo.svg';
var res = "";

export default function App() {
  const showsidebar = () => {
    console.log("hamburger was wit");
    console.log(sidebar);
    if (sidebar == "row left fixed") {
      setsidebar("row left fixed blockx");
      setcssmain("setmargin row main");
    } else {
      setcssmain("row main");
      setsidebar("row left fixed");
    }
  };
  let [abc, setabc] = useState("Click here");
  let [sidebar, setsidebar] = useState("row left fixed");
  let [cssmain, setcssmain] = useState("row main");
  return (
    <div className="App">
      <div className="header">
        <div className="menu">
          <FontAwesomeIcon
            icon={faBars}
            className="bigicon"
            onClick={showsidebar}
          />
        </div>
        <div className="logo">
          <img
            src={logo}
            alt="logo"
          />
        </div>
        <div className="links">{/* Login */}</div>
      </div>

      <div className="qiracontainer">
        <div className="grid">
          <div className={sidebar} id="left">
            {sidebtns.map((buttons, index) => (
              <LeftButtons name={buttons.name} url={buttons.to} />
            ))}
          </div>

          <div className={cssmain}>
            <div className="banneratter">
              <div className="Stackup">
                <div className="maintitle">
                  Only platform to write premium articles.
                </div>

                <div className="buttonarea">Watch Video</div>
              </div>

              <div className="picarea">
                <img
                  src="https://avatars.dicebear.com/api/croodles/your-sdasdasdasdasdasdasaasdasdasasddsaasdaadasdasdsadasasdasdasdasadasdasdsad-asdasdsadseedasdasdasdasdasdasdasdasdadad.svg"
                  name="doodle1"
                  alt="doodle1"
                />
              </div>
            </div>

            <div className="medias"></div>

            <Routes>
              {sidebtns.map((buttons, index) => (
                <Route path={buttons.to} element={<Trending />}></Route>
              ))}
            </Routes>
          </div>

          <div className="fixed row right " id="right">
            <div className="containerright">
              <div className="notify">
                <div className="title">Writing on QiraPages</div>
                <div className="points">
                  <li>Blur out images</li>
                  <li>Hide some paragraphs</li>
                  <li>Hide Embedded Medias</li>
                  <li>Supports Maths Equations</li>
                  <li>No Advertisements</li>
                </div>
                <a href="https://anonpe.com/qirapages/">
                  <div className="menus black">
                    <span className="btn">Get Started</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

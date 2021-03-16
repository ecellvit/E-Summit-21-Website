import React from "react";
import "./Landing.css";
import LOGO from "../../Assets/logo.png";

function Landing() {
  return (
    <div>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 H 0.728 C 0.760,0,0.76,0.057,0.744,0.104 L 0.483,0.87 C 0.477,0.889,0.466,0.902,0.452,0.904 L 0,1 V 0 Z" />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myCliped" clipPathUnits="objectBoundingBox">
            <path d="M 0.776,0.039 C 0.786,0.015,0.787,0,0.824,0 H 1 V 0.813 L 0.543,0.88 C 0.543,0.88,0.491,0.879,0.522,0.794 L 0.776,0.039" />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClipS" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.753 C1,0.781,0.973,0.807,0.933,0.816 L0.127,0.997 C0.064,1,0,0.979,0,0.933 V0" />
          </clipPath>
        </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
          <clipPath id="myClipedS" clipPathUnits="objectBoundingBox">
            <path d="M0,0.419 C0,0.375,0.027,0.336,0.066,0.322 L0.873,0.034 C0.936,0.022,1,0.071,1,0.14 V1 H0 V0.419" />
          </clipPath>
        </defs>
      </svg>
      <div className="container">
        <div id="blue-bg">
          <nav class="flex justify-between">
            <div class="lefty flex items-center">
              <div class="logo">
                <img src={LOGO} alt="E-Summit" />
              </div>
            </div>
            <div class="righty">
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#events">Events</a>
              <a href="#speakers">Speakers</a>
              <a href="#sponsors">Sponsors</a>
            </div>
          </nav>
          <div class="content">
            <p class="top">ECELL-VIT Presents</p>
            <h1>E-SUMMIT'21</h1>
            <p class="bottom">
              The 3rd edition of the biggest business fest in South India
            </p>
            <div>
              <button class="btn btn-primary">Register Now!</button>
            </div>
          </div>
        </div>
        <div id="black-bg"></div>
      </div>
    </div>
  );
}

export default Landing;

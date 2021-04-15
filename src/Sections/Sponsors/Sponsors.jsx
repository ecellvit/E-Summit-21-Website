import React, { useEffect } from "react";
import AW from "../../Assets/AWS.png";
import DF from "../../Assets/Devfolio.png";
import WS from "../../Assets/WSS.png";
import XF from "../../Assets/XDC.png";
import PY from "../../Assets/Polygon.png";
import TZ from "../../Assets/Tezos.png";
import CE from "../../Assets/Celo.png";
import PO from "../../Assets/Portis.png";
import LW from "../../Assets/LWT.png";
import DS from "../../Assets/DSIJ.png";
import EL from "../../Assets/ELM.png";
import SE from "../../Assets/StockEdge.png";
import DZ from "../../Assets/Drinkzy.jpg";
import LB from "../../Assets/LondonBubble.png";
import GMC from "../../Assets/GMC.png";
import NP from "../../Assets/NutriPanda.jpg";
import SR from "../../Assets/scripts.png";
import IB from "../../Assets/investmentbuddy.png";
import FP from "../../Assets/Fampay.PNG"

import "./Sponsors.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Sponsors() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <div className="past-sponsors" id="sponsors">
      <div className="sponsor-head">
        <span>Sponsors</span>
      </div>
      <div className="grid-container">
        <div data-aos="flip-up" className="grid-item">
          <a href="https://aws.amazon.com/">
            <img src={AW} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://devfolio.co/">
            <img src={DF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://wharfstreetstrategies.com/">
            <img src={WS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://xinfin.org/">
            <img src={XF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.portis.io/">
            <img src={PO} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://celo.org/">
            <img src={CE} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://tezos.com/">
            <img src={TZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.polygon.technology/">
            <img src={PY} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://learningwhiletravelling.com/">
            <img src={LW} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.dsij.in/">
            <img src={DS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.elearnmarkets.com/">
            <img src={EL} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://stockedge.com/">
            <img src={SE} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.drinkzy.in/">
            <img src={DZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://londonbubbleco.com/">
            <img src={LB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.givemycertificate.com/">
            <img src={GMC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.nutripanda.in/">
            <img src={NP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.scriptindia.org/">
            <img src={SR} alt="Sponsor Logo" />
          </a>
        </div>

        <div data-aos="flip-up" className="grid-item">
          <a href="https://theinvestingbuddy.com/start-investing/">
            <img src={IB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://fampay.in/">
            <img src={FP} alt="Sponsor Logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

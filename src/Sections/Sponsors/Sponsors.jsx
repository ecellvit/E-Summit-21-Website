import React, { useEffect } from "react";
// import CC from "../../Assets/coca-cola-logo.png";
// import P from "../../Assets/paytm.png";
// import SC from "../../Assets/snapchat.png";
// import SP from "../../Assets/spotify.png";
// import IX from "../../Assets/ixigo.png";
// import JB from "../../Assets/jetbrains.png";
// import WO from "../../Assets/wooplr.png";
// import IS from "../../Assets/internshala.png";
// import ZP from "../../Assets/zebpay.png";
// import GM from "../../Assets/geeksmate.png";
// import YS from "../../Assets/yourstory.png";
// import KK from "../../Assets/kaspersky.png";

//NEW SPONSORS START FROM HERE
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
import LB from "../../Assets/LondonBubble3.png";
import GMC from "../../Assets/GMC.png";
import NP from "../../Assets/NutriPanda.jpg";

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
        <span>Our Sponsors</span>
      </div>
      <div className="grid-container">
        <div data-aos="flip-up" className="grid-item">
          <a href="https://aws.amazon.com/">
            <img className="awslogosm" src={AW} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://devfolio.co/">
            <img src={DF} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://wharfstreetstrategies.com/index.html">
            <img src={WS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://xinfin.org/">
            <img className="xinfinlogosm" src={XF} alt="Sponsor Logo" />
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
            <img className="lwtlogosm" src={LW} alt="Sponsor Logo" />
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
            <img className="stockedgelogosm" src={SE} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.drinkzy.in/">
            <img src={DZ} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://londonbubbleco.com/">
            <img className="stockedgelogosm" src={LB} alt="Sponsor Logo" />
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
        {/* <div data-aos="flip-up" className="grid-item">
          <a href="https://www.coca-colaindia.com/">
            <img src={CC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://paytm.com/">
            <img src={P} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://open.spotify.com/">
            <img src={SP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.jetbrains.com/">
            <img src={JB} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.ixigo.com/">
            <img src={IX} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.snapchat.com/">
            <img src={SC} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="#sponsors">
            <img src={WO} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://internshala.com/">
            <img src={IS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://zebpay.com/in/">
            <img src={ZP} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://yourstory.com/">
            <img src={YS} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="http://geeksmate.io/">
            <img src={GM} alt="Sponsor Logo" />
          </a>
        </div>
        <div data-aos="flip-up" className="grid-item">
          <a href="https://www.kaspersky.co.in/">
            <img src={KK} alt="Sponsor Logo" />
          </a>
        </div> */}
        {/* <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
        <div data-aos="flip-up" className="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div> */}
      </div>
    </div>
  );
}

export default Sponsors;

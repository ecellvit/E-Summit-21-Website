import React from "react";
import CC from "../../Assets/coca-cola-logo.png";
import P from "../../Assets/paytm.png";
import SC from "../../Assets/snapchat.png";
import SP from "../../Assets/spotify.png";
import IX from "../../Assets/ixigo.png";
import JB from "../../Assets/jetbrains.png";
import "./Sponsors.css";

function Sponsors() {
  return (
    <div className="past-sponsors" id="sponsors">
      <div className="sponsor-head">Past Sponsors</div>
      <div class="grid-container">
        <div class="grid-item">
          <img src={CC} alt="Sponsor Logo" />
        </div>
        <div class="grid-item">
          <img src={P} alt="Sponsor Logo" />
        </div>
        <div class="grid-item">
          <img src={SP} alt="Sponsor Logo" />
        </div>
        <div class="grid-item">
          <img src={JB} alt="Sponsor Logo" />
        </div>
        <div class="grid-item">
          <img src={IX} alt="Sponsor Logo" />
        </div>
        <div class="grid-item">
          <img src={SC} alt="Sponsor Logo" />
        </div>
      </div>
    </div>
  );
}

export default Sponsors;

import React from "react";
import "./AboutUs.css";
function AboutUs() {
  return (
    <div className="aboutus" id="about">
      <div className="separator">
        <span>About Us</span>
      </div>
      <div className="random">
        <p className="aboutus__aboutusinfo">
          The Entrepreneurship Cell, VIT is a student club that aims at
          fostering entrepreneurial spirit among the stu nts. E-Cell, VIT is in
          collaboration with Technology Business Incubator (TBI) under
          government of India. TBI along with E-Cell provides the students with
          an advanced platform for converting their potential small scale ideas
          into leading start-ups
        </p>
      </div>
      <div className="separator">
        <span>About E-Summit</span>
      </div>
      <div className="random">
        <p className="aboutus__aboutusinfo">
          E-Summit is the conclave which opens the doors to the world of
          entrepreneurship. With it's exclusive class of exhilarating events,
          wonderful workshops, exciting expos and the perfect panel of
          spectacular speakers, E-Summit aims at instilling a sense of
          innovation in the youth.
        </p>
        <br/>
        <p className="aboutus__aboutusinfo">
          E-Summit is the 3rd edition of the biggest business fest in South
          India. It is expected to have a massive turnout of participants thus
          providing a great platform for marketing and outreach.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

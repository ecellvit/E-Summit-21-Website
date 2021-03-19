import React, { useEffect } from "react";
import "./AboutUs.css";
import Aos from "aos";
import "aos/dist/aos.css";

function AboutUs() {
  useEffect(() => {
    Aos.init({ duration: "700" });
  }, []);

  return (
    <div className="aboutus" id="about">
      <div data-aos="flip-left" className="separator">
        <span>About Us</span>
      </div>
      <div className="random">
        <p data-aos="zoom-in" className="aboutus__aboutusinfo">
          Entrepreneurship Cell is a student body based in VIT Vellore which
          aims at fostering entrepreneurial spirit amongst young aspirants by
          providing them with a platform and required resources for actuating
          their ideas into successful business ventures. E-Cell strives to
          attain an entrepreneurial environment in the campus and believes in
          taking strides towards establishing an ever-growing, ever-improving
          Start-Up environment. Our sole approach is to magnify the reach and
          set up a diverse pool of investors, evaluators and mentors.
        </p>
      </div>
      <div data-aos="flip-left" className="separator">
        <span>About E-Summit</span>
      </div>
      <div className="random">
        <p data-aos="zoom-in" className="aboutus__aboutusinfo">
          E-Summit is the conclave that opens the doors to the world of
          entrepreneurship. Masquerading as a single event, it is a fusion of
          visionary activities and insightful sessions that open the realm of
          networking and broaden the horizon of business in students' minds.
          With its exclusive class of exhilarating events, interesting
          workshops, exciting expos and spectacular speakers, E-Summit aims at
          instilling innovation in young minds.
        </p>
        <br />
        <p data-aos="zoom-in" className="aboutus__aboutusinfo">
          E-Summit 2021 is the 3rd edition of the biggest business fest in South
          India. It is expected to have a massive turnout of participants, this
          providing a great platform for marketing and outreach.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;

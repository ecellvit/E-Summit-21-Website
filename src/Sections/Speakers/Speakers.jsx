import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Speakers.css";
import test from "../../Assets/etalk.jpg";

function Speakers() {
  return (
    <div id="speakers">
      <div className="separator">
        <span>Past Speakers</span>
      </div>
      <div className="carousel">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1200,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1200,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={test} alt="Speaker" />
              <div className="speaker-detail">
                <div>Hello Varun</div>
                <div>Founder</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={test} alt="Speaker" />
              <div className="speaker-detail">
                <div>Hello Varun</div>
                <div>Founder</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={test} alt="Speaker" />
              <div className="speaker-detail">
                <div>Hello Varun</div>
                <div>Founder</div>
              </div>
            </div>
          </div>
          <div className="speaker-item">
            <div className="speaker-card">
              <img src={test} alt="Speaker" />
              <div className="speaker-detail">
                <div>Hello Varun</div>
                <div>Founder</div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default Speakers;

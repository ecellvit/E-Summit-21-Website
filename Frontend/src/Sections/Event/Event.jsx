import React, { useEffect } from "react";
import "./Event.css";
import EventCard from "../../Components/EventCard/EventCard";
import Aos from "aos";
import "aos/dist/aos.css";

function Event() {
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      <div id="events">
        <div data-aos="flip-left" className="separator"></div>
        <div className="list-wrapper">
          <span data-aos="flip-left" className="event-head">
            Events
          </span>
          <div className="rb-container">
            <ul className="rb">
              <li>
                <div className="list-title">29th April -- Day 1</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="E-Talk"
                    content="Prominent speakers from the entrepreneurial world deliver a talk to promote the ethos of entrepreneurship in the campus. The session is open to the audience's questions, thus furnishing their minds with a clearer picture of entrepreneurship."
                  />
                </div>
              </li>
              <li>
                <div className="list-title">30th April -- Day 2</div>
                <div data-aos="flip-right">
                  <EventCard
                    head="VisionX"
                    content="Startups are only half as innovative if they fail to understand the intricacies of their domain. To ensure that they realise their true potential, VisionX nurtures young minds to incorporate technical concepts in their business models."
                  />
                </div>
                <div data-aos="flip-left">
                  <EventCard
                    head="Business workshop"
                    content="The Business workshop of E-Summit brings with it the innate opportunity to discover the nuts and bolts of the startup world. Leveraging basic business concepts to a higher pedestal, this event inspires students to explore various business avenues."
                  />
                </div>
                <div data-aos="flip-right">
                  <EventCard
                    head="E-Hack"
                    content="E-Hack is an overnight Hackathon that aims to find the leaders of tomorrow. Challenging participants to come up with effective solutions to real-world problems, this event is one comprehensive test of grit, resilience and innovation."
                  />
                </div>
              </li>
              <li>
                <div className="list-title">1st May -- Day 3</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="Med-Tech Challenge"
                    content="Med-Tech challenge is a pitching competition that invites people to come up with ideas or prototypes capable of producing an impactful change in the medical sector. Visionary ideas with worthy pitches get incubation under VITTBI."
                  />
                </div>
                <div data-aos="flip-right">
                  <EventCard
                    head="Innoventure"
                    content="Innoventure is a business simulation that gives participants a platform to develop skills like product development and business analysis while inculcating knowledge about market trends and economic concepts that prevail in day-to-day applications."
                  />
                </div>
              </li>
              <li>
                <div className="list-title">2nd May -- Day 4</div>
                <div data-aos="flip-left">
                  <EventCard
                    head="Start-Up Internship Expo"
                    content="Start-up Internship Expo provides students with the chance of enriching themselves with industrial knowledge. Major startups from all over India become a part of this motion by providing exciting internship offers to bright minds."
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Event;

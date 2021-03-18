import React , {useEffect} from "react";
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
          <span data-aos="flip-left" className="event-head">Events</span>
          <div className="rb-container">
            <ul className="rb">
              <li>
                <div className="list-title">29th April -- Day 1</div>
                <div data-aos="flip-left">
                <EventCard
                  head="E-Talk"
                  content="Prominent motivational speakers from the entrepreneurial environment
            will be delivering a talk to inspire the students and promote the
            ethos of entrepreneurship in the campus. This session will also be
            open to questions from the audience, thus furnishing the minds of
            the students with vivid ideas and a clearer picture of the
            entrepreneurship realm."
                />
                </div>
                
              </li>
              <li>
                <div className="list-title">30th April -- Day 2</div>
                <div data-aos="flip-right">
                <EventCard
                  head="VisionX"
                  content="Startups are only half as innovative if they fail to understand the
            intricacies of their domain. To ensure that startups realise their
            true potential, VisionX nurtures young minds to incorporate
            technical concepts in their business models."
                />
                </div>
                <div data-aos="flip-left">
                <EventCard
                  head="Business workshop"
                  content="The Business workshop of E-Summit brings with it the innate
            opportunity to discover the nuts and bolts of the startup world and
            explore various business avenues"
                />
                </div>
                <div data-aos="flip-right">
                <EventCard
                  head="E-Hack"
                  content="A test of grit, resilience and innovation, E-Hack is an overnight
            Hackathon that challenges participants to come up with effective
            solutions to real-world problems."
                />
                </div>
                
              </li>
              <li>
                <div className="list-title">1st May -- Day 3</div>
                <div data-aos="flip-left">
                <EventCard
                  head="Med-Tech Challenge"
                  content="Med-Tech challenge is a pitching competition that invites people to
            come up with ideas or prototypes capable of producing an impactful
            change in the medical sector. Visionary ideas with worthy pitches
            get incubation under VIT Technology Business Incubator."
                />
                </div>
                <div data-aos="flip-right">
                <EventCard
                  head="Innoventure"
                  content="Innoventure is a business simulation which gives the participants an
            entrepreneurial ecosystem and platform to develop skills like
            product development, business analysis, inculcate knowledge about
            the trends in the current market and economic concepts like taxation
            which prevail important applications in day to day lives."
                />
                </div>
                
              </li>
              <li>
                <div className="list-title">2nd May -- Day 4</div>
                <div data-aos="flip-left">
                <EventCard
                  head="Start-Up Internship Expo"
                  content="Start-up Internship Expo will provide students with the chance of
            landing their dream internships. Major startups from all over India
            will become a part of this motion by providing exciting internship
            offers to bright minds, allowing them to enrich themselves with
            wisdom and knowledge of the real world."
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

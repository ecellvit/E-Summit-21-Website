import React from "react";
import "./Event.css";
import EventCard from "../../Components/EventCard/EventCard";

function Event() {

  return (
    <div className="list-wrapper">
      <div id="events">
        <h1 className="events-head">Events</h1>
      </div>
      <div className="black-line"></div>
      <div className="list-item-wrapper">
        <div className="list-bullet"></div>
        <EventCard
          listTitle="29th April -- Day 1"
          head="E-Talk"
          content="Prominent motivational speakers from the entrepreneurial environment
            will be delivering a talk to inspire the students and promote the
            ethos of entrepreneurship in the campus. This session will also be
            open to questions from the audience, thus furnishing the minds of
            the students with vivid ideas and a clearer picture of the
            entrepreneurship realm."
        />
      </div>
      <div className="list-item-wrapper">
        <div className="list-bullet"></div>
        <EventCard
          listTitle="30th April -- Day 2"
          head="VisionX"
          content="Startups are only half as innovative if they fail to understand the
            intricacies of their domain. To ensure that startups realise their
            true potential, VisionX nurtures young minds to incorporate
            technical concepts in their business models."
        />
        <EventCard
          listTitle=""
          head="Business workshop"
          content="The Business workshop of E-Summit brings with it the innate
            opportunity to discover the nuts and bolts of the startup world and
            explore various business avenues"
        />
        <EventCard
          listTitle=""
          head="Overnight -- E-Hack"
          content="A test of grit, resilience and innovation, E-Hack is an overnight
            Hackathon that challenges participants to come up with effective
            solutions to real-world problems."
        />
      </div>
      <div className="list-item-wrapper">
        <div className="list-bullet"></div>
        <EventCard
          listTitle="1st May -- Day 3"
          head="Med-Tech Challenge"
          content="Med-Tech challenge is a pitching competition that invites people to
            come up with ideas or prototypes capable of producing an impactful
            change in the medical sector. Visionary ideas with worthy pitches
            get incubation under VIT Technology Business Incubator."
        />
        <EventCard
          listTitle=""
          head="Innoventure"
          content="Innoventure is a business simulation which gives the participants an
            entrepreneurial ecosystem and platform to develop skills like
            product development, business analysis, inculcate knowledge about
            the trends in the current market and economic concepts like taxation
            which prevail important applications in day to day lives."
        />
      </div>
      <div className="list-item-wrapper">
        <div className="list-bullet"></div>
        <EventCard
          listTitle="2nd May -- Day 4"
          head="Start-Up Internship Expo"
          content="Start-up Internship Expo will provide students with the chance of
            landing their dream internships. Major startups from all over India
            will become a part of this motion by providing exciting internship
            offers to bright minds, allowing them to enrich themselves with
            wisdom and knowledge of the real world."
        />
      </div>
    </div>
  );
}

export default Event;

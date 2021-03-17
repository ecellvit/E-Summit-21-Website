import React from "react";
import "./App.css";
import Event from "./Sections/Event/Event";
import AboutUs from "./Sections/AboutUs/AboutUs";
import Landing from "./Sections/Landing/Landing";
import Sponsors from "./Sections/Sponsors/Sponsors";

function App() {
  return (
    <>
      <Landing />
      <AboutUs />
      <Event />
      <Sponsors />
    </>
  );
}

export default App;

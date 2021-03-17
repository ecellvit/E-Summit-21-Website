import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#events">Events</a>
      <a href="#speakers">Speakers</a>
      <a href="#sponsors">Sponsors</a>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;

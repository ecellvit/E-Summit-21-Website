import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import Menu from "../Menu/Menu";

const Sidebar = ({ open, ...props }) => {
  const isHidden = open ? true : false;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <Menu />
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Sidebar;

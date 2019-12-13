import React from "react";
import { IconButton } from "@material-ui/core";

const buttonStyle = {
  backgroundColor: "transparent",
  outline: 0
};

function NavIcons({ onClick=null,children }) {
  return (
    <IconButton
      style={buttonStyle}
      disableRipple="true"
      disableTouchRipple="true"
      size="small"
      onClick = {onClick}
    >
      {children}
    </IconButton>
  );
}

export default NavIcons;

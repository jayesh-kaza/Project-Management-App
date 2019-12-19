import React from "react";
import { IconButton } from "@material-ui/core";
import Icon from "../../Atoms/Icon";

function Logo({ icon, width = 100, height = 100 }) {
  return (
    <IconButton
      style={{ backgroundColor: "transparent", marginRight: 10, outline: 0 }}
      disableRipple="true"
      disableTouchRipple="true"
    >
      <Icon icon={icon} width={width} height={height} />
    </IconButton>
  );
}

export default Logo;

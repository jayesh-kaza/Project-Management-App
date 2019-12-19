import React from "react";
import { Divider } from "@material-ui/core";
const FullDivider = props => {
  return (
    <Divider
      light="true"
      style={{
        background: props.color,
        marginTop: props.space,
        marginBottom: props.space
      }}
    />
  );
};
export default FullDivider;

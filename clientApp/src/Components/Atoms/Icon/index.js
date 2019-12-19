import React from "react";

function Icon({ icon, height, width, alt }) {
  return (
    <img
      src={require(`./Icons/${icon}.svg`)}
      width={width}
      height={height}
      alt={alt}
    />
  );
}

export default Icon;

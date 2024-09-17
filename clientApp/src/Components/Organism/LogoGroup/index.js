import React from "react";
import Logo from "../../Molecules/Logo";
const divStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "space-around",
  paddingTop: "40px"
};
function LogoGroup() {
  const icons = ["activision", "airbnb", "amd", "uhg", "wellsfargo"];
  return (
    <div style={divStyle}>
      {icons.map(icon => (
        <Logo icon={icon} />
      ))}
    </div>
  );
}

export default LogoGroup;

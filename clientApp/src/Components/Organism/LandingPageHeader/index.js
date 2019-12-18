import React from "react";
import { AppBar, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Logo from "../../Molecules/Logo";
import NavGroup from "../../Molecules/NavGroup";
import NavIcons from "../../Molecules/NavIcons";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center",
    height: "auto",
    justifyContent: "space-between",
    margin: "0 auto",
    marginBottom: "0px",
    padding: "0 64px",
    overflow: "hidden"
  }
}));

const divStyle = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  alignItems: "center",
  justifyContent: "space-between"
};

const Header = ({ loginOpen }) => {
  const classes = useStyles();
  const firstGroup = [
    <NavIcons>
      Why Asana?
      <KeyboardArrowDownIcon />
    </NavIcons>,
    <NavIcons>
      Solutions
      <KeyboardArrowDownIcon />
    </NavIcons>,
    <NavIcons>
      Resources
      <KeyboardArrowDownIcon />
    </NavIcons>,
    <NavIcons>Pricing</NavIcons>
  ];
  const secondGroup = [
    <NavIcons onClick={loginOpen}>Log In</NavIcons>,
    <Button
      size="small"
      color="primary"
      variant="contained"
      style={{ backgroundColor: "#635ac7", outline: 0, textTransform: "none" }}
    >
      <Typography style={{ color: "white" }}>Try For Free</Typography>
    </Button>
  ];
  return (
    <AppBar
      position="static"
      color="#ffffff"
      elevation="none"
      className={classes.root}
    >
      <div style={divStyle}>
        <Logo icon="asana" width="50" height="40" />
        <NavGroup components={firstGroup} />
      </div>
      <NavGroup components={secondGroup} />
    </AppBar>
  );
};

export default Header;

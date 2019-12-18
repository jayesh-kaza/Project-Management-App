import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  span: {
    borderTop: "1px solid #9CA6AF",
    width: "19%",
    height: "1px",
    display: "block"
    // alignSelf:"flex-end"
  },
  text: { font: "Helvitica Neue", color: "#646F79" }
});
const CustomDivider = props => {
  const classes = useStyles();
  return (
    <div align="center" className={classes.container}>
      <span className={classes.span}></span>
      <Typography className={classes.text}>or</Typography>
      <span className={classes.span}></span>
    </div>
  );
};
export default CustomDivider;

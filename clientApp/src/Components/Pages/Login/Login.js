import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Google from "../../Templates/LoginTemplate/Google";
import Credential from "../../Molecules/Field/Credential";
import CustomDivider from "../../Atoms/Divider/CustomDIvider";

const useStyles = makeStyles(theme => ({
  margin: {
    marginBottom: theme.spacing(6)
  },
  marginSmall: {
    marginBottom: theme.spacing(2)
  },
  test: {
    flexGrow: 0.03
  },

  con: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },

  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexShrink: 1,
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    color: "#796EFF",
    width: "400px"
  },

  text: {
    font: "Helvitica Neue",
    color: "#646F79",
    alignSelf: "center"
  },
  Button: {
    backgroundColor: "#796EFF",
    font: "Helvitica Neue",
    contrast: "3.59",
    color: "#FFFFFF",
    width: "400px",
    marginBottom: theme.spacing(5),
    "&:hover": {
      backgroundColor: "blue"
    }
  },
  textLink: {
    color: "#9CA6AF",
    fontSize: "16px"
  }
}));
const Login = props => {
  const classes = useStyles();
  return (
    <div>
      <Dialog
        open={props.logged}
        fullWidth="true"
        onClose={props.loginClose}
        aria-labelledby="form-dialog-title"
        maxWidth={"sm"}
      >
        <DialogTitle id="form-dialog-title" align="center">
          <Typography variant="h4">Login</Typography>
        </DialogTitle>

        <Google />

        <CustomDivider />

        <DialogContent className={classes.container}>
          <div className={classes.margin}>
            <Credential
              typeClass={classes.text}
              textFieldClass={classes.textField}
              typeContent="Email Address"
              label="example@company.com"
            />
            <Credential
              typeClass={classes.text}
              textFieldClass={classes.textField}
              typeContent="Password"
              label="password"
            />
          </div>

          <div className={classes.test}></div>
          <Button
            variant="contained"
            size="large"
            color="inherit"
            className={classes.Button}
            onClick={props.onChange}
          >
            Login
          </Button>

          <div className={classes.marginSmall}>
            <Link to="/" className={classes.textLink} align="center">
              Forgot Password?
            </Link>
          </div>
          <div className={classes.con}>
            <Typography className={classes.textLink}>
              Dont have an account?
            </Typography>

            <Link to="/" className={classes.text}>
              <b>Sign up</b>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Login;

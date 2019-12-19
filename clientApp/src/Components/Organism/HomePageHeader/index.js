import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CustomButton from "../../Atoms/Button";
import img from "../../Atoms/Images/1.jpg";
import SearchBar from "../../Molecules/SeachBar";
import AddMenu from "../AddMenu";
import UserMenu from "../UserMenu";
import HelpMenu from "../HelpMenu";
import clsx from "clsx";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: "transparent",
    outline: "0"
  },
  hide: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  avatar: {
    background: "#4caf50",
    width: 24,
    height: 24
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(6),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 500
      }
    }
  }
}));

export default function HomePageHeader({ open, handleDrawerOpen }) {
  const classes = useStyles();
  let userIcon = <Avatar alt="r" className={classes.avatar} src={img} />;
  return (
    <Fragment>
      <div className={classes.root}>
        <AppBar
          position="static"
          color="#ffffff"
          elevation="none"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar>
            <IconButton
              style={{
                backgroundColor: "transparent",
                outline: "0"
              }}
              disableRipple="true"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              Home
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon fontSize="small" style={{ color: "#bdbdbd" }} />
              </div>
              <SearchBar />
            </div>
            <div>
              <AddMenu />
            </div>
            <div>
              <HelpMenu />
            </div>
            <div>
              <CustomButton type="warning" name="Upgrade" />
            </div>
            <div>
              <UserMenu name={userIcon} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import FullDivider from "../../Atoms/Divider";
const useStyles = makeStyles(theme => ({
  icon: {
    color: "#cbd4db",
    minWidth: "30px"
  },
  link: {
    "&:hover": {
      textDecoration: "none"
    },
    height: "10px"
  },
  list: {
    "&:hover": {
      backgroundColor: "rgba(255,255,255,.08)"
    },
    "&:focus": {
      backgroundColor: "rgba(255,255,255,.2)"
    },
    paddingLeft: "15px",
    height: "28px",
    paddingBottom: "0px",
    paddingTop: "0px"
  },
  listText: {
    fontWeight: "400",
    fontSize: "14px",
    primary: {
      fontSize: "14px",
      fontWeight: "400"
    },
    color: "#cfd8dc",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans- serif'
  }
}));

const DisplayListWithIcon = props => {
  const classes = useStyles();
  const items = props.items;
  return (
    <List
      style={{
        paddingTop: "0px",
        paddingBottom: "0px"
      }}
    >
      {Object.keys(items).map(key => (
        <Link className={classes.link} to={items[key][1]}>
          <ListItem className={classes.list} button key={key}>
            <ListItemIcon className={classes.icon}>
              {items[key][0]}
            </ListItemIcon>
            <ListItemText
              styles={{ fontSize: "14px" }}
              className={classes.listText}
              primary={<Typography variant="body2">{key}</Typography>}
            />
          </ListItem>
        </Link>
      ))}
      <FullDivider space="10px" color="#424242" />
    </List>
  );
};
export default DisplayListWithIcon;

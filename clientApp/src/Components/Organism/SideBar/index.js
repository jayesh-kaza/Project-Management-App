import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
    Drawer,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from '@material-ui/icons/Home';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        color: "#151b26",
        backgroundColor: "#151b26",
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "flex-end"
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
    },
    contentShift: {
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    }
}));

function SideBar({ open, handleDrawerClose, routes }) {
    const classes = useStyles();
    const items = {
        "Home": [<HomeIcon />, routes[0].path],
        "My Tasks": [<CheckCircleOutlineIcon />, routes[1].path],
        "My Projects": [<GroupWorkIcon />, routes[2].path],
        "Teams": [<GroupRoundedIcon />, routes[3].path],
    };

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton
                    disableRipple='true'
                    style={{
                        backgroundColor: 'transparent', outline: "0",
                    }}
                    onClick={handleDrawerClose}>
                    <ChevronRightIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {
                    Object.keys(items).map(key => (
                        <Link to={items[key][1]}>
                            <ListItem button key={key}>
                                <ListItemIcon>
                                    {items[key][0]}
                                </ListItemIcon>
                                <ListItemText primary={key} />
                            </ListItem>
                        </Link>
                    ))}
            </List>
        </Drawer>
    );
}

export default SideBar;
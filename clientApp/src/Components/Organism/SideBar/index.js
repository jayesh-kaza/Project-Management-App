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
    ListItemText,
    Button
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import Logo from "../../Molecules/Logo";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "#151b26"
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
        "Home": [<HomeOutlinedIcon style={{ color: "white" }} />, routes[0].path],
        "My Tasks": [<CheckCircleOutlineIcon />, routes[1].path],
        "My Projects": [<GroupWorkIcon />, routes[2].path],
        "Teams": [<GroupRoundedIcon />, routes[3].path],
    };

    return (
        <Drawer
            className={classes.root}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper
            }}
        >
            <div className={classes.drawerHeader}>
                <Logo icon="asana" width="50" height="40" />
                <IconButton
                    disableRipple='true'
                    style={{
                        color: "white",
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
                        <Link color='inherit' underline='none' to={items[key][1]}>
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
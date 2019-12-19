import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Drawer,
    IconButton,
    Typography,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import Logo from "../../Molecules/Logo";
import DisplayListWithIcon from "../../Molecules/DisplayListWithIcon";
import DisplayList from '../../Molecules/DisplayList'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';

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
        justifyContent: "space-between"
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
    const list1 = {
        "Favorites": [null, routes[0].path],
        "All Items": [null, routes[1].path],
        "Deleted Items": [null, routes[2].path]
    }
    const list2 = {
        "Tasks I've Created": [null, routes[0].path],
        "Assigned to Others": [null, routes[1].path],
        "Recent Tasks": [null, routes[2].path]
    }
    const items = {
        "Home": [<HomeOutlinedIcon fontSize='small' className={classes.icon} />, routes[0].path],
        "My Tasks": [<CheckCircleOutlineIcon fontSize='small' className={classes.icon} />, routes[1].path],
        "My Projects": [<GroupWorkIcon fontSize='small' className={classes.icon} />, routes[2].path],
        "Teams": [<GroupRoundedIcon fontSize='small' className={classes.icon} />, routes[3].path],
    };
    const star = <StarBorderRoundedIcon fontSize='small' />
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
            <DisplayListWithIcon items={items} />
            <Typography style={{ paddingLeft: '15px', color: '#9ca6af', fontSize: '12px' }} variant='body2' >Favorite by clicking {star} </Typography>
            <DisplayList items={list1} />
            <Typography style={{ paddingLeft: '15px', color: '#9ca6af', fontSize: '12px' }} variant='body2' >Reports</Typography>
            <DisplayList items={list2} />
        </Drawer>
    );
}

export default SideBar;

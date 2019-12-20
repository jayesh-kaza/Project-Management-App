import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
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
import FullDivider from "../../Atoms/Divider";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    detail: {
        display: "flex",
        flexGrow: 1
    },
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
    },
    expansionpanel: {
        paddingLeft: '0px',
        paddingRight: '0px',
    },
    summary: {
        paddingLeft: '0px',
        marginBottom: '-20px',
        marginTop: '-20px'
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
            <FullDivider space='10px' color='#424242' />
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap', justifyContent: 'flex-start' }}>
                <ExpansionPanel
                    elevation='none'
                    style={{
                        backgroundColor: "#151b26",
                    }}
                >
                    <ExpansionPanelSummary style={{
                        paddingLeft: '0px',
                        marginBottom: '-10px',
                        marginTop: '-10px'
                    }}
                        expandIcon={<ExpandMoreIcon
                            style={{
                                color: "white",
                                backgroundColor: 'transparent', outline: "0",
                            }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.expansionpanelsummary}
                    >
                        <Typography style={{ paddingLeft: '15px', color: '#9ca6af', fontSize: '12px' }} variant='body2' >Reports</Typography>
                    </ExpansionPanelSummary >

                    <ExpansionPanelDetails className={classes.detail} style={{ paddingLeft: '0px', paddingTop: '0px', paddingBottom: '0px', marginBottom: '-10px' }}>
                        <DisplayList items={list2} />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <FullDivider space='5px' color='#424242' />
            </div>
        </Drawer>
    );
}

export default SideBar;
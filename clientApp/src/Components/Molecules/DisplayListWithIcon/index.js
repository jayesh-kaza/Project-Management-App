import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from "@material-ui/core";
import FullDivider from "../../Atoms/Divider";
const useStyles = makeStyles(theme => ({
    icon: {
        color: '#cbd4db',
        minWidth: '35px',
    },
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    link: {
        "&:hover": {
            textDecoration: 'none',
        },
        height: '10px',
    },
    list: {
        "&:hover": {
            backgroundColor: 'rgba(255,255,255,.08)'
        },
        "&:focus": {
            backgroundColor: 'rgba(255,255,255,.2)'
        },
        paddingLeft: '15px',
        height: '28px',
        paddingBottom: '0px',
        paddingTop: '0px',
    },
    listText: {
        color: '#cbd4db',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, sans- serif',
    },
}));

const DisplayListWithIcon = (props) => {
    const classes = useStyles();
    const items = props.items;
    const flag = props.flag;
    return (
        <List>
            {
                Object.keys(items).map(key => (
                    <Link className={classes.link} to={items[key][1]}>
                        <ListItem className={classes.list} button key={key}>
                            <ListItemIcon className={classes.icon}>
                                {items[key][0]}
                            </ListItemIcon>
                            <ListItemText className={classes.listText} primary={key} />
                        </ListItem>
                    </Link>
                ))}
            <FullDivider color='#616161' />
        </List>
    )
}
export default DisplayListWithIcon;
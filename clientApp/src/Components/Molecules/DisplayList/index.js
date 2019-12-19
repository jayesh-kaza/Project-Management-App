import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemText,
} from "@material-ui/core";
import FullDivider from "../../Atoms/Divider";
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles(theme => ({
    margin: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0)
    },
    link: {
        marginTop: '0px',
        marginBottom: '0px',
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

const DisplayList = (props) => {
    const classes = useStyles();
    const items = props.items;
    return (
        <List style={{
            paddingTop: '0px',
            paddingBottom: '0px',
        }}>

            {
                Object.keys(items).map(key => (
                    <Link className={classes.link} to={items[key][1]}>
                        <ListItem className={classes.list} button key={key}>
                            <ListItemText className={classes.listText} primary={<Typography variant='body2'>{key}</Typography>} />
                        </ListItem>
                    </Link>
                ))}
            <FullDivider space='10px' color='#424242' />
        </List>
    )
}
export default DisplayList;
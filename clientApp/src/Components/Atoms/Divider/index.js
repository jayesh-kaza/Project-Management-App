import React from "react";
import { makeStyles } from "@material-ui/core";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    margin: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
}));
const FullDivider = (props) => {

    const classes = useStyles();
    return (
        <Divider className={classes.margin} light='true' style={{ background: props.color }} />
    )
}
export default FullDivider;
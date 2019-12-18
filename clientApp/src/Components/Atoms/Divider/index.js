import React from "react";
import { makeStyles } from "@material-ui/core";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
    // marginTop: '16px',
    // marginBottom: '16px',
    margin: {
        marginTop: theme.spacing(0),
        marginBottom: theme.spacing(0),
    },
}));
const FullDivider = (props) => {

    const classes = useStyles();
    return (
        <Divider light='true' style={{ background: props.color, marginTop: props.space, marginBottom: props.space }} />
    )
}
export default FullDivider;
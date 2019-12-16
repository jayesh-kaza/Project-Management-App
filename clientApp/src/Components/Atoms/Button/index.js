import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    Button: {

        backgroundColor: "#FCBD01",
        color: 'white',
        borderColor: "#f2a100",
        outline: 'None',
        textTransform: 'None',
        "&:hover": {
            backgroundColor: "#f2a100"
        }
    },
}));

const CustomButton = (props) => {
    const classes = useStyles();
    return (
        <div>
            <Button size='small' variant="contained" className={classes.Button}>
                {props.name}</Button>
        </div>
    );
}
export default CustomButton;
import React from 'react'
import AssignmentIcon from '@material-ui/icons/Assignment';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'classnames'
const colors=['#E362E3','#EA4E9D','#AA62E3']
const useStyles = makeStyles(theme=>({
    root:{
       marginBottom:theme.spacing(5),
       marginTop:theme.spacing(5),
        marginRight:theme.spacing(2)
    },
    margin:{
        marginBottom:theme.spacing(6),
        marginTop:theme.spacing(6),
        marginLeft:theme.spacing(6),
        marginRight:theme.spacing(6)
    }

}));
const Card=(props)=>{
   
    const classes = useStyles();
return (

        <Paper className={classes.root} 
               style={{ backgroundColor:props.color,borderRadius:'25px',...props.style}} 
               elevation={6}>
                       
                <div className={classes.margin}>
              {props.icon}
                </div>

        </Paper>
    
);
} 

export default Card
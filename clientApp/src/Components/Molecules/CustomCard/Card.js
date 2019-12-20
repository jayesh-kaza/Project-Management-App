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
const Card=()=>{
   
    const classes = useStyles();
return (

        <Paper className={classes.root} 
               style={{ backgroundColor:colors[Math.floor(Math.random() * Math.floor(3))],borderRadius:'25px'}} 
               elevation={6}>
                       
                <div className={classes.margin}>
                <AssignmentIcon style={{color:'white',background:"transparant"}} fontSize="large"/>
                </div>
        </Paper>
    
);
} 

export default Card
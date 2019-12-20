
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import AssignmentIcon from '@material-ui/icons/Assignment';
const cardColors=['#']
const useStyles = makeStyles(theme=>({
    cardcontainer:{
        display:'flex',
        justifyContent:'center'
    },
    card:{
        backgroundColor: "primary"
    },
    cell:{
        paddingTop: '5px',
        paddingBottom: '5px'
    },
details:{
    paddingBottom: '0px',
    paddingLeft: '8px',
    paddingRight:'8px', 
},
    container:{
        display:'flex',
       justifyContent:'center'
    },
    expand:{
        flexGrow:0.4,
        marginTop:theme.spacing(15)
    },
    root: {
        minWidth: 20,
       marginBottom:theme.spacing(6),
       marginTop:theme.spacing(6),
        backgroundColor:'#E362E3',
    
     
        marginRight:theme.spacing(3)
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    margin:{
        marginBottom:theme.spacing(6),
        marginTop:theme.spacing(6),
        marginLeft:theme.spacing(8),
        marginRight:theme.spacing(8)
    }
}));
const HomePage = (props) => {
    const classes = useStyles();
    const rows=[{task:'auth0',taskType:'java'},
    {task:'spring security',taskType:'java'},
    {task:'auth0 resourse authorization',taskType:'react'}
        ]
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return (
        <div>

        <div className={classes.container}>
            <ExpansionPanel className={classes.expand} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Tasks Due Soon</Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
      <Table  aria-label="simple table">
   
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.task}>
              <TableCell className={classes.cell} component="th" scope="row">
                <Typography variant="body2">{row.task}</Typography>
              </TableCell>
              <TableCell className={classes.cell}align="right">
                  <Chip size="small" color="secondary" label={row.taskType}  />
            </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </ExpansionPanelDetails>
      </ExpansionPanel>
        </div>
        <div className={classes.cardcontainer}>
        <Paper className={classes.root} elevation={3}>           
            <div className={classes.margin}>
            <AssignmentIcon style={{color:'white',background:"transparant"}} fontSize="large"/>
            </div>
        </Paper>

        <Paper className={classes.root} elevation={3}>           
            <div className={classes.margin}>
            <AssignmentIcon style={{color:'white',background:"transparant"}} fontSize="large"/>
            </div>
        </Paper>

        <Paper className={classes.root} elevation={3}>           
            <div className={classes.margin}>
            <AssignmentIcon style={{color:'white',background:"transparant"}} fontSize="large"/>
            </div>
        </Paper>

     

    </div>

        </div>
    )
}
export default HomePage;
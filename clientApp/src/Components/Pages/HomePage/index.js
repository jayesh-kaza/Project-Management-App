
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

import Chip from '@material-ui/core/Chip';

import CustomCard from '../../Molecules/CustomCard/Card'
const useStyles = makeStyles(theme=>({
    rootHolder:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    },
    padding:{
        marginBottom:theme.spacing(15)
    },
    cardcontainer:{
        display:'flex',
        justifyContent:'center'
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
    },
    expand2:{
      flexGrow:0.44,
  },
  
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
   
}));
const HomePage = (props) => {
    const classes = useStyles();
    const rows=[{task:'auth0',taskType:'java'},
    {task:'spring security',taskType:'java'},
    {task:'auth0 resourse authorization',taskType:'react'}
        ]
      const fakeTable=[]
    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);
    const task=<h4>java</h4>
    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    const handleChange2 = panel => (event, isExpanded) => {
      setExpanded2(isExpanded ? panel : false);
    };
    return (
        <div className={classes.rootHolder}>

        <div className={classes.padding}>
        </div>

        <div className={classes.container}>   
        <ExpansionPanel className={classes.expand} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.expand}
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

        <div className={classes.padding}></div>
        <div className={classes.container}> 
        <ExpansionPanel className={classes.expand2} expanded={expanded2 === 'panel1'} onChange={handleChange2('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.expand2}
        >
          <Typography className={classes.heading}>Recent Projects</Typography>

        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>

        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>




        <div className={classes.cardcontainer}>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
    </div>

        </div>
    )
}
export default HomePage;
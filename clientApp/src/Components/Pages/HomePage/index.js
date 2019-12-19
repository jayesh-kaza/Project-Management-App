import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 20,
    height: "43.5vw",
    width: "100",
    align: "center",
    marginLeft: "10px",
    marginRight: "10px",
    marginBottom: "10px",
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});
const HomePage = props => {
  // const card = <Card raised='true' />
  const classes = useStyles();
  return (
    <Card raised="true" className={classes.card}>
      <CardContent align="center" style={{marginTop:"150px"}}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          benevolent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default HomePage;

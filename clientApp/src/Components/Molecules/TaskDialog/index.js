import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const projects = ["Asana", "Hello World", "Griet"];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignContent: "space-evenly"
  },
  margin: {
    marginBottom: theme.spacing(6)
  }
}));

function Dialogs({ open, handleOpen }) {
  let date = new Date();
  let todaysDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  const classes = useStyles();
  const [project, setProject] = useState("");
  return (
    <Dialog open={open} onClose={handleOpen} fullWidth>
      <DialogTitle align="center">Add Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Choose an existing project to add the task.
        </DialogContentText>
        <form className={classes.container}>
          <FormControl fullWidth style={{ paddingBottom: "10px" }}>
            <InputLabel htmlFor="project">Project</InputLabel>
            <Select
              value={project}
              onChange={event => setProject(event.target.value)}
            >
              {projects.map(project => (
                <MenuItem key={project} value={project}>
                  {project}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField label="Task Name" style={{ paddingBottom: "10px" }} />
          <TextField label="Assign to" style={{ paddingBottom: "30px" }} />
          <TextField label="Due by" type="date" defaultValue={todaysDate} />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpen} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOpen} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Dialogs;

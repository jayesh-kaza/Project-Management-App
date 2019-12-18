import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  FormControl,
  Button,
  TextField,
  InputLabel,
  MenuItem,
  Select,
  DialogActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const teams = ["High Radius", "Asana", "Codility"];

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignContent: "space-evenly"
  }
}));

function ProjectDialog({ open, handleOpen }) {
  const classes = useStyles();
  const [team, setTeam] = useState();
  return (
    <Dialog open={open} onClose={handleOpen} fullWidth>
      <DialogTitle align="center">Create a new Project</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill out the following to create a new project.
        </DialogContentText>
        <form className={classes.container}>
          <TextField
            required
            label="Project Name"
            style={{ paddingBottom: "10px" }}
          />
          <TextField label="Description" style={{ paddingBottom: "20px" }} />
          <FormControl fullWidth style={{ paddingBottom: "10px" }}>
            <InputLabel htmlFor="Team">Team</InputLabel>
            <Select
              required
              value={team}
              onChange={event => setTeam(event.target.value)}
            >
              {teams.map(team => (
                <MenuItem key={team} value={team}>
                  {team}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpen} color="primary">
          Cancel
        </Button>
        <Button onClick={handleOpen} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProjectDialog;

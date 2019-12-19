import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  Input,
  Chip,
  MenuItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignContent: "space-evenly"
  },
  chips: {
    display: "flex",
    flexWrap: "wrap"
  },
  chip: {
    margin: 2
  }
}));

const Members = ["Rahul", "Sreetej", "Jayesh"];

function TeamDialog({ open, handleOpen }) {
  const classes = useStyles();
  const [memberNames, setMemberNames] = useState([]);

  const handleChangeMultiple = event => {
    memberNames.indexOf(event.target.value) === -1
      ? setMemberNames([...memberNames, event.target.value])
      : setMemberNames(memberNames.filter(ele => ele !== event.target.value));
  };

  return (
    <Dialog open={open} onClose={handleOpen} fullWidth>
      <DialogTitle align="center">Create a new Team</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill out the following to create a new team.
        </DialogContentText>
        <form className={classes.container}>
          <TextField
            required
            label="Team Name"
            style={{ paddingBottom: "20px" }}
          />
          <FormControl fullWidth style={{ paddingBottom: "10px" }}>
            <InputLabel id="demo-mutiple-chip-label" htmlFor="Members">
              Team Members
            </InputLabel>
            <Select
              labelId="demo-mutiple-chip-label"
              id="demo-mutiple-chip"
              mulitple
              value={memberNames}
              onChange={handleChangeMultiple}
              input={<Input id="select-multiple-chip" />}
              renderValue={selected => (
                <div className={classes.chips}>
                  {selected.map(value => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              )}
            >
              {Members.map(member => (
                <MenuItem key={member} value={member}>
                  {member}
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

export default TeamDialog;

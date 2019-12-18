import React, { useState, useEffect } from "react";
import useDebounce from "../../Helpers/Debounce";
import {
  InputBase,
  Popper,
  Typography,
  Fade,
  Paper,
  List,
  ListItem,
  ListItemText,
  ClickAwayListener
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: "inherit",
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderWidth: "1px",
    borderRadius: "30px",
    opacity: "5"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    height: "10%",
    fontSize: "12px",
    paddingLeft: "39px",
    [theme.breakpoints.up("sm")]: {
      width: 100,
      height: 12,
      "&:focus": {
        width: 400
      }
    }
  },
  typography: {
    paddingTop: "4px",
    paddingBottom: "4px",
    padding: theme.spacing(2),
    width: 450
  },
  root: {
    width: 500
  }
}));

function searchCharacters(search) {
  return fetch(`http://localhost:8080/task/like/${search}`, {
    method: "GET"
  })
    .then(r => r.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}

const SearchBar = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(() => {
    if (debouncedSearchTerm) {
      searchCharacters(debouncedSearchTerm).then(results => {
        setResults(results);
        setOpen(true);
      });
    } else {
      setAnchorEl(null);
      setOpen(false);
      setResults([]);
    }
  }, [debouncedSearchTerm]);

  const setSearch = e => {
    setSearchTerm(e.target.value);
    setAnchorEl(e.currentTarget);
  };

  return (
    <div>
      <InputBase
        textSize="small"
        variant="rounded"
        squared="false"
        placeholder="Search"
        //startAdornment={<SearchIcon fontSize='small' style={{ color: "#bdbdbd" }} />}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        onChange={e => setSearch(e)}
      />
      <ClickAwayListener
        onClickAway={() => {
          setOpen(!open);
        }}
      >
        <Popper
          style={{ marginTop: "2px" }}
          open={open}
          anchorEl={anchorEl}
          placement="bottom"
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper>
                {results.length !== 0 ? (
                  <List
                    className={classes.typography}
                    component="nav"
                    aria-label="secondary mailbox folders"
                  >
                    {results.map(result => (
                      <div>
                        <ListItem button>
                          <ListItemText
                            primary={result.name}
                            secondary={result.description}
                          />
                        </ListItem>
                      </div>
                    ))}
                  </List>
                ) : (
                  <Typography className={classes.typography}>
                    <div>No results found</div>
                  </Typography>
                )}
              </Paper>
            </Fade>
          )}
        </Popper>
      </ClickAwayListener>
    </div>
  );
};
export default SearchBar;

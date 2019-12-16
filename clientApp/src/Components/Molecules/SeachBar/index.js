import React, { useState, useEffect } from 'react';
import useDebounce from '../../Helpers/Debounce'
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Input from '@material-ui/core/Input';
import SearchIcon from '@material-ui/icons/Search';
function searchCharacters(search) {
  return fetch(
    `http://localhost:8080/task/like/${search}`,
    {
      method: 'GET'
    }
  )
    .then(r => r.json())
    .catch(error => {
      console.error(error);
      return [];
    });
}
const useStyles = makeStyles(theme => ({
  inputRoot: {
    color: 'inherit',
    borderStyle: 'solid',
    borderColor: '#bdbdbd',
    borderWidth: '1px',
    borderRadius: '30px',
    opacity: '5'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    height: '10%',
    fontSize: '12px',
    [theme.breakpoints.up('sm')]: {
      width: 100,
      height: 12,
      '&:focus': {
        width: 400,
      },
    },
  },
  typography: {
    paddingTop: '4px',
    paddingBottom: '4px',
    padding: theme.spacing(2),
    width: 450
  },
  root: {
    width: 500,
  },
}));


const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then(results => {
          setIsSearching(false);
          setResults(results);
          setOpen(true)
        });
      } else {
        setAnchorEl(null)
        setOpen(false);
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );


  const setSearch = (e) => {
    setSearchTerm(e.target.value)
    setAnchorEl(e.currentTarget)
  }
  // Pretty standard UI with search input and results

  const [visible, setVisible] = useState(true)
  const visibleHandler = () => {
    setVisible(false)
  }
  return (
    <div>
      {/* <ClickAwayListener onClickAway={visibleHandler}> */}
      <InputBase
        // startAdornment={<SearchIcon fontSize='small' style={{ color: "#bdbdbd" }} />}
        textSize='small'
        variant="rounded"
        squared="false"
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearch(e)}
      />
      {/* <Input type='text'
        size='small'
        variant="rounded"
        squared="false"
        placeholder="Search"
        disableUnderline='true'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        onChange={(e) => setSearch(e)}
      /> */}
      {/* </ClickAwayListener> */}
      <Popper style={{ marginTop: '2px' }} open={open} anchorEl={anchorEl} placement='bottom' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            {/* {visible ? */}
            <Paper>
              {(results.length !== 0) ?
                <List className={classes.typography} component="nav" aria-label="secondary mailbox folders">
                  {results.map(result => (
                    <div>
                      <ListItem button>
                        <ListItemText primary={result.name} secondary={result.description} />
                      </ListItem>
                    </div>
                  ))}
                </List>
                : <Typography className={classes.typography}><div>No results found</div></Typography>}
            </Paper>
            {/* : <div />} */}
          </Fade>
        )}
      </Popper>
    </div >
  );

}
export default SearchBar;




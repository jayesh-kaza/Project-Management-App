import React, { useState, useEffect } from 'react';
import useDebounce from '../../Helpers/Debounce'
import InputBase from '@material-ui/core/InputBase';
import {makeStyles } from '@material-ui/core/styles';
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
      borderStyle:'solid',
      borderColor: 'black',
      borderWidth:'1px',
      borderRadius: '30px',
      opacity: '10'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      height:'10%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 500,
        },
      },
    },
  }));
  
  
const   SearchBar=(props)=>{
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const classes=useStyles();
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        searchCharacters(debouncedSearchTerm).then(results => {
          setIsSearching(false);
          setResults(results);
        });
      } else {
        setResults([]);
      }
    },
    [debouncedSearchTerm]
  );

  // Pretty standard UI with search input and results
  return (
    <div>
    <InputBase
              variant="rounded"
              squared="false"
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e=>setSearchTerm(e.target.value)}
    />
    
      {isSearching && <div>Searching ...</div>}
      {results.map(result => (
        <div key={result.id}>
          <h4>{result.name}</h4>
        </div>
      ))}
    </div>
  );
}
export default SearchBar;




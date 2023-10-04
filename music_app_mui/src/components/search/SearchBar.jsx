import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

const SearchBar = ({setQuery}) => {
  return (
    <TextField onChange={(e) => {setQuery(e.target.value)}}
      id="input-with-icon-textfield"
        label="Search for a Song"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
    />
  )
}

export default SearchBar;
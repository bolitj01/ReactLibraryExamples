import * as React from 'react';
import Search from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

const ViewList = ({setSelectedView}) => {
  return (
    <>
      <ListItemButton onClick={() => {setSelectedView("Search")}}>
        <ListItemIcon>
          <Search/>
        </ListItemIcon>
        <ListItemText primary="Search" />
      </ListItemButton>
      <ListItemButton onClick={() => {setSelectedView("Library")}}>
        <ListItemIcon>
          <LibraryMusicIcon />
        </ListItemIcon>
        <ListItemText primary="Library" />
      </ListItemButton>
    </>
  )
};

export default ViewList;
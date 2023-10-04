import React from 'react';
import SearchView from './search/SearchView';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Library from './library/Library';
import { Typography } from '@mui/material';

//View changes depending on selected view from drawer
const MainView = ({ selectedView }) => {
    switch (selectedView) {
        case "Search":
            return (

                <SearchView></SearchView>

            )

        case "Library":
            return (

                <Library></Library>

            )
        default:
            return (
                <Typography>No View Selected</Typography>
            )
    }
}

export default MainView
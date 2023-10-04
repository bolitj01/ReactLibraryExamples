import React, { useState, useContext, useEffect } from 'react';
import LibraryContext from '../../context/LibraryContext';
import SearchBar from './SearchBar';
import useDebounce from '../../hooks/useDebounce';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Image from 'mui-image';
import useSongSearch from '../../hooks/useSearchSong';


const SearchView = () => {
    const [query, setQuery] = useState("");

    const [songs, setSongs] = useState([]);

    const { searchSong } = useSongSearch();

    useEffect(() => {
        console.log(songs);
    }, [songs]);

    //Fetch songs using API after user is done typing for 1 second
    useDebounce(() => {
        console.log("Query Time");
        searchSong(query, setSongs);
    }, 1000, [query]);

    const { library, setLibrary } = useContext(LibraryContext);

    return (
        <>
            <SearchBar setQuery={setQuery}></SearchBar>
            <List sx={{ width: "100%"}}>
                {songs.map((song) => (
                    <>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <>
                                        <Typography>
                                            {song.title}
                                        </Typography>
                                        <Typography>
                                            {song.artist}
                                        </Typography>
                                    </>
                                }
                            ></ListItemText>
                            <ListItemAvatar variant="outlined">
                                <Avatar src={song.album.coverURL} variant="rounded" sx={{width: 70, height: 70}}></Avatar>
                            </ListItemAvatar>
                            <Divider></Divider>
                        </ListItem>
                    </>
                ))}
            </List>
        </>
    )
}

export default SearchView;
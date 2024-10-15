import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import useDebounce from '../../hooks/useDebounce';
import List from '@mui/material/List';
import useSongSearch from '../../hooks/useSearchSong';
import SongCard from '../SongCard';

const SearchView = () => {
    const [query, setQuery] = useState("");

    const [songs, setSongs] = useState([]);

    const { searchSong } = useSongSearch();

    useEffect(() => {
        console.log(songs);
    }, [songs]);

    //Fetch songs using API after user is done typing for 1 second
    useDebounce(() => {
        console.log("Fetching songs with query: ", query);
        searchSong(query, setSongs);
    }, 1000, [query]);

    return (
        <>
            <SearchBar setQuery={setQuery}></SearchBar>
            <List sx={{ width: "100%"}}>
                {songs.map((song, index) => (
                    <SongCard song={song} key={index} ></SongCard>
                ))}
            </List>
        </>
    )
}

export default SearchView;
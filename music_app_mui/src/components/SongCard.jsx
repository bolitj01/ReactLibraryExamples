import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import { useContext } from 'react';
import LibraryContext from '../context/LibraryContext';
import DeleteIcon from '@mui/icons-material/Delete';

const SongCard = ({song}) => {
  const {library, addSong, removeSong, songInLibrary} = useContext(LibraryContext);
 
  return (
    <ListItem>
      <ListItemText
        primary={
          <>
            <Typography>{song.title}</Typography>
            <Typography>{song.artist}</Typography>
          </>
        }
      ></ListItemText>
      <ListItemAvatar variant="outlined">
        <Avatar
          src={song.album.coverURL}
          variant="rounded"
          sx={{ width: 70, height: 70 }}
        ></Avatar>
      </ListItemAvatar>
      {/* Add button only if not in library */}
      {!songInLibrary(song) ? 
        <AddToPhotosIcon onClick={() => addSong(song)}></AddToPhotosIcon> 
        : 
        <DeleteIcon onClick={() => removeSong(song)}></DeleteIcon>
      }
      <Divider></Divider>
    </ListItem>
  );
};

export default SongCard;

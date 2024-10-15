import { useContext } from "react";
import LibraryContext from "../../context/LibraryContext";
import SongCard from "../SongCard";

const Library = () => {
  const { library } = useContext(LibraryContext);

  return (
    <div>
      {library.map((song, index) => (
        <SongCard key={index} song={song}></SongCard>
      ))}
    </div>
  );
}

export default Library;
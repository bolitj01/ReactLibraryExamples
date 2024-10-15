import { useState, createContext } from "react";

const LibraryContext = createContext();

const LibraryProvider = ({ children }) => {
  const [library, setLibrary] = useState([]);

    const addSong = (song) => {
        setLibrary([...library, song]);
    };

    const removeSong = (song) => {
        setLibrary(library.filter((s) => s.id !== song.id));
    };

    const songInLibrary = (song) => {
        return library.some((s) => s.id === song.id);
    }

  return (
    <LibraryContext.Provider value={{library, addSong, removeSong, songInLibrary}}>{children}</LibraryContext.Provider>
  );
};

export { LibraryProvider };

export default LibraryContext;

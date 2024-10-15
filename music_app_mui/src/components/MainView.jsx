import SearchView from "./search/SearchView";
import Library from "./library/Library";
import { Typography } from "@mui/material";
import { LibraryProvider } from "../context/LibraryContext";

//View changes depending on selected view from drawer
const MainView = ({ selectedView }) => {
  return (
    <LibraryProvider>
      {selectedView === "Search" ? (
        <SearchView />
      ) : selectedView === "Library" ? (
        <Library />
      ) : (
        <Typography variant="h3">Select a view from the drawer</Typography>
      )}
    </LibraryProvider>
  );
};

export default MainView;

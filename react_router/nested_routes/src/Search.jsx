import { useParams } from "react-router";

const Search = () => {
    let { query } = useParams();

    return (
        <div>Search: {query}</div>
    );
};

export default Search;
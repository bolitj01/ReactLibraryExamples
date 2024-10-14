import { Routes, Route } from "react-router-dom";
import Topics from "./Topics";
import Topic from "./Topic";
import Search from "./Search";

const Nested = () => {
  return (
    <Routes>
      <Route path="" element={<Topics />}>
        {/* Nested routes will begin with /topics/ */}
        <Route path=":topicName" element={<Topic />} />
        <Route path="search/:query" element={<Search />} />
      </Route>
    </Routes>
  );
};

export default Nested;

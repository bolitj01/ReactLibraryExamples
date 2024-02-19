import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topics from './Topics';
import Topic from './Topic';
import Search from './Search';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/topics" element={<Topics />}>
          {/* Nested routes will begin with /topics/ */}
          <Route path=":topicName" element={<Topic />} />
          <Route path="" element={<div>Please select a topic.</div>} />
          <Route path="search/:query" element={<Search />} />
        </Route>
      </Routes>
    </Router>
  )
};

export default App;

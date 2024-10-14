import { Outlet, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

const Basic = () => (
    <div>
      <nav>
        <Link to="home">Home</Link>
        <br />
        <Link to="about">About</Link>
        <br />
        <Link to="profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
);

export default Basic;
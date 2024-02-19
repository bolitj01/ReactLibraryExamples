import { Link } from 'react-router-dom';
import useAuth from './useAuth';
import Logout from './Logout';

const HomePage = () => {

  const {user} = useAuth();

  return (
    <div>
      <h1>Welcome to the HomePage</h1>
      <p>This is a public page, accessible to everyone.</p>
      {user ? <Logout/> : <Link to="/login">Login</Link>}
       | <Link to="/profile">Profile</Link>
    </div>
  );
};

export default HomePage;

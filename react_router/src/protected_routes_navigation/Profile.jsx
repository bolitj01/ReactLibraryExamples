import useAuth from './useAuth';
import Logout from './Logout';

const Profile = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <p>Welcome, {user.username}! You are logged in.</p>
      <Logout/>
    </div>
  );
};

export default Profile;

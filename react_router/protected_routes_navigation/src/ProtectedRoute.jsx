import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) { // If the user is not authenticated
    // Redirect to login and pass the current location in state
    // so the user can be redirected back after logging in
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  //Render the children if the user is authenticated
  return children;
};

export default ProtectedRoute;

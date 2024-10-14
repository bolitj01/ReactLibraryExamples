import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';

const Protected = () => {
  return (
    <AuthProvider> {/* Wrap the entire app in the AuthProvider */}
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
    </AuthProvider>
  );
};

export default Protected;

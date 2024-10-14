import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // Implement login logic here
    setUser({id: '1', username: credentials.username});
  };

  const logout = () => {
    // Implement logout logic here
    setUser(null);
  };

  const authFeatures = {
    user,
    login,
    logout
  };

  //Render any child components and pass the authFeatures object to them via context
  return <AuthContext.Provider value={authFeatures}>{children}</AuthContext.Provider>;
};

import { useEffect } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { getUser } from '../services/auth.js';

// create user provider!
const UserContext = createContext;

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useEffect(currentUser);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

const useUser = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('useUser must be wrapped in a UserProvider');
  }
  return data;
};

export { UserProvider, useUser };

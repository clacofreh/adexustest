import { useContext } from 'react';
import AuthContext from '../context/Auth/AuthContext';

export const useAuthContext = () => {
  return useContext(AuthContext);
};

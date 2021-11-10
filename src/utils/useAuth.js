import axios from 'axios';
import { useContext, useState } from 'react';
import UserContext from './UserContext';

export default function useAuth() {
  const { user, setUser } = useContext(UserContext);
  const [error, setError] = useState('');

  const login = async (name, password) => {
    try {
      const { data } = await axios.post('users/login', {
        name,
        password,
      });

      setUser(data);
    } catch (error) {
      setError('Wrong Login or Password');
    }
  };

  const logout = async () => {
    try {
      await axios.get('users/logout');

      setUser({});
    } catch (error) {
      // setError(error.message);
    }
  };

  return { user, error, login, logout };
}

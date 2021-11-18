import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './UserContext';

export default function useAuth() {
  const navigate = useNavigate();
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
      navigate('/login');
    } catch (error) {
      // setError(error.message);
    }
  };

  return { user, error, login, logout };
}

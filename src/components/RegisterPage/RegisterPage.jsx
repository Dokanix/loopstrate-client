import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useError from '../../utils/useError';
import '../../styles/form.scss';

const RegisterPage = () => {
  const navigator = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useError(2);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      await axios.post('users/register', {
        name,
        password,
      });

      navigator('/login');
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1>Register</h1>
      <div className='form__field'>
        <label htmlFor='nameInput'>Login</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='nameInput'
        />
      </div>
      <div className='form__field'>
        <label htmlFor='passwordInput'>Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id='passwordInput'
          type='password'
        />
      </div>
      <div className='form__field'>
        <label htmlFor='confirmPasswordInput'>Confirm Password</label>
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id='confirmPasswordInput'
          type='password'
        />
      </div>
      <button>Register</button>
      <div>{error}</div>
    </form>
  );
};

export default RegisterPage;

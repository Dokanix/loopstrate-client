import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import useError from '../../utils/useError';
import '../../styles/form.scss';
import '../../styles/button.scss';

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
      <h1 className='form__title'>Register</h1>
      <div className='form__field'>
        <input
          required
          placeholder='Name'
          className='form__input'
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='nameInput'
        />
        <label className='form__label' htmlFor='nameInput'>
          Username
        </label>
      </div>
      <div className='form__field'>
        <input
          required
          placeholder='Password'
          className='form__input'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id='passwordInput'
          type='password'
        />
        <label className='form__label' htmlFor='passwordInput'>
          Password
        </label>
      </div>
      <div className='form__field'>
        <input
          required
          placeholder='Confirm Password'
          className='form__input'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          id='confirmPasswordInput'
          type='password'
        />
        <label className='form__label' htmlFor='confirmPasswordInput'>
          Confirm Password
        </label>
      </div>
      <button className='button button--primary form__submit'>Register</button>
      <div>{error}</div>
    </form>
  );
};

export default RegisterPage;

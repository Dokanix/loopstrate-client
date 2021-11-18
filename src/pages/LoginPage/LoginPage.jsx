import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../../utils/useAuth';
import '../../styles/form.scss';
import '../../styles/button.scss';

const LoginPage = ({ redirected = '/hot' }) => {
  const { user, login, error } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(name, password);
  };

  if (user.name) return <Navigate replace to={redirected} />;

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1 className='form__title'>Login</h1>
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
      <button className='button button--primary form__submit'>Login</button>
      <div>{error}</div>
    </form>
  );
};

export default LoginPage;

import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import useAuth from '../../utils/useAuth';
import '../../styles/form.scss';

const LoginPage = () => {
  const { user, login, error } = useAuth();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(name, password);
  };

  if (user.name) return <Navigate replace to='/' />;

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1>Login</h1>
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
      <button>Login</button>
      <div>{error}</div>
    </form>
  );
};

export default LoginPage;

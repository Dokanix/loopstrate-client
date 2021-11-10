import { Link, useNavigate } from 'react-router-dom';

import './Navbar.scss';
import useAuth from '../../utils/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    logout();
    navigate('/');
  };

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link to='/'>Logo</Link>
      </div>
      {user.name ? (
        <>
          <div>
            <Link to='/me'>Profile</Link>
          </div>
          <div>
            <Link onClick={handleClick} to='/'>
              Logout
            </Link>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to='/register'>Register</Link>
          </div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
        </>
      )}
    </nav>
  );
}

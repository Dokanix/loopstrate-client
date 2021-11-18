import { Link } from 'react-router-dom';

import './Navbar.scss';
import '../../styles/button.scss';
import useAuth from '../../utils/useAuth';
import Searchbar from '../Searchbar/Searchbar';
import Profile from '../Profile/Profile';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <Link className='navbar__logo' to='/hot'>
          Loopstrate
        </Link>
      </div>
      <Searchbar />
      <div className='navbar__buttons'>
        {user.name ? (
          <>
            <Profile />
          </>
        ) : (
          <>
            <Link className='button' to='/login'>
              Login
            </Link>

            <Link className='button button--primary' to='/register'>
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

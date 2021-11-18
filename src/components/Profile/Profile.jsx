import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdPerson, MdUpload } from 'react-icons/md';
import { HiHeart } from 'react-icons/hi';

import UserContext from '../../utils/UserContext';
import useAuth from '../../utils/useAuth';
import './Profile.scss';

export default function Profile() {
  const { user } = useContext(UserContext);
  const { logout } = useAuth();

  return (
    <div className='profile'>
      <div className='profile__avatar'>
        <img src={`http://localhost:3001/img/avatars/${user.avatar}`} alt='' />
      </div>
      <div className='profile__menu'>
        <Link to={`/users/${user.name}`}>
          <div className='profile__option'>
            <MdPerson className='profile__icon' /> My Profile
          </div>
        </Link>
        <Link to={`/liked`}>
          <div className='profile__option'>
            <HiHeart className='profile__icon' /> My Likes
          </div>
        </Link>
        <Link to={`/upload`}>
          <div className='profile__option'>
            <MdUpload className='profile__icon' /> Upload
          </div>
        </Link>
        <div className='profile__option'>
          <div onClick={logout}>Logout</div>
        </div>
      </div>
    </div>
  );
}

import { useContext } from 'react';
import { Navigate } from 'react-router';
import userContext from '../../utils/UserContext';

const ProfilePage = () => {
  const { user } = useContext(userContext);

  return user.name ? (
    <div>
      <h1>{user.name} Profile</h1>
      <div>Level {user.level}</div>
    </div>
  ) : (
    <Navigate to='/login' />
  );
};

export default ProfilePage;

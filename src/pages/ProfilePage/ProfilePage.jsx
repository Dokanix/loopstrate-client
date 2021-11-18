import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import ArtworkGrid from '../../components/ArtworkGrid/ArtworkGrid';

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get(`users/${name}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [name]);

  return user.name ? (
    <div>
      <h1>{user.name}</h1>
      <div>Level {user.level}</div>
      <h2>Artworks</h2>
      <ArtworkGrid source={`users/${user._id}/artworks`} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default ProfilePage;

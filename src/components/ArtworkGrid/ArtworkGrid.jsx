import { useState, useEffect } from 'react';
import axios from 'axios';

import ArtworkCard from '../ArtworkCard/ArtworkCard';
import useAuth from '../../utils/useAuth';
import '../../styles/grid.scss';

export default function ArtworkGrid({ source }) {
  const { user } = useAuth();
  const [artworks, setArtworks] = useState([]);

  const handleDelete = (id) => {
    setArtworks((prev) => prev.filter((artwork) => artwork._id !== id));
  };

  useEffect(() => {
    const getLikesAndArtworks = async () => {
      let response = await axios.get(source);

      let artworks = response.data.artworks;

      if (user.name) {
        response = await axios.get('users/me/likes');
        const likes = response.data.likes;

        artworks = artworks.map((artwork) => {
          return {
            ...artwork,
            liked: likes.some((like) => like.artwork === artwork._id),
          };
        });
      }

      setArtworks(artworks);
    };

    getLikesAndArtworks();
  }, [user.name, source]);

  return (
    <div className='grid'>
      {artworks.map((artwork) => (
        <ArtworkCard
          handleDelete={handleDelete}
          key={artwork._id}
          artwork={artwork}
        />
      ))}
    </div>
  );
}

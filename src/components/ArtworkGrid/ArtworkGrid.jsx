import { useState, useEffect } from 'react';
import axios from 'axios';

import ArtworkCard from '../ArtworkCard/ArtworkCard';
import '../../styles/grid.scss';

export default function ArtworkGrid() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const getLikesAndArtworks = async () => {
      let response = await axios.get('users/me/likes');

      const likes = response.data.likes;

      response = await axios.get('artworks');

      let artworks = response.data.artworks;

      artworks = artworks.map((artwork) => {
        return {
          ...artwork,
          liked: likes.some((like) => like.artwork === artwork._id),
        };
      });

      setArtworks(artworks);
    };

    getLikesAndArtworks();
  }, []);

  return (
    <div className='grid'>
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork._id} artwork={artwork} />
      ))}
    </div>
  );
}

import { useState } from 'react';
import axios from 'axios';
import useAuth from '../../utils/useAuth';
import './ArtworkCard.scss';

export default function ArtworkCard({ artwork }) {
  const { user } = useAuth();
  const [liked, setLiked] = useState(artwork.liked);
  const [likeCount, setLikeCount] = useState(artwork.likeCount);

  const handleClick = async () => {
    if (!liked) {
      axios.post('likes', {
        artwork: artwork._id,
      });

      setLikeCount((prev) => prev + 1);
    } else {
      axios.delete(`artworks/${artwork._id}/likes`);

      setLikeCount((prev) => prev - 1);
    }

    setLiked((prev) => !prev);
  };

  return (
    <div className='artwork'>
      <div className='artwork__image'>
        <img
          alt={artwork.title}
          src={'http://localhost:3001/img/' + artwork.path}
        />
      </div>
      <div>{artwork.title}</div>
      <div>
        {artwork.author?.name} {likeCount}
      </div>
      {user.name && (
        <button onClick={handleClick}>{liked ? 'Unlike' : 'Like'}</button>
      )}
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { HiOutlineHeart, HiHeart, HiTrash } from 'react-icons/hi';

import useAuth from '../../utils/useAuth';
import './ArtworkCard.scss';

export default function ArtworkCard({ artwork, handleDelete }) {
  const { user } = useAuth();
  const [liked, setLiked] = useState(artwork.liked);
  const [likeCount, setLikeCount] = useState(artwork.likeCount);

  const deleteArtwork = async (e) => {
    e.preventDefault();

    try {
      await axios.delete(`artworks/${artwork._id}`);
      handleDelete(artwork._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  const likeArtwork = async (e) => {
    e.preventDefault();

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
    <div className='card'>
      <Link to={`/artworks/${artwork._id}`}>
        <div className='card__image'>
          <img
            alt={artwork.title}
            src={'http://localhost:3001/img/artworks/' + artwork.path}
          />
          <div className='card__details'>
            <div>{artwork.title}</div>
            <div className='card__buttons'>
              {user.name === artwork.author?.name && (
                <button className='card__button' onClick={deleteArtwork}>
                  <HiTrash />
                </button>
              )}
              {user.name && (
                <button className='card__button' onClick={likeArtwork}>
                  {liked ? <HiHeart /> : <HiOutlineHeart />}
                </button>
              )}
            </div>
          </div>
        </div>
      </Link>
      <div className='card__footer'>
        <div>
          {artwork.author && (
            <Link to={`/users/${artwork.author.name}`}>
              {artwork.author.name}
            </Link>
          )}
        </div>
        <div>
          {likeCount} <HiHeart className='card__icon' />
        </div>
      </div>
    </div>
  );
}

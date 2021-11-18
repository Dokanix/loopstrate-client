import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HiHeart } from 'react-icons/hi';

import './ArtworkPage.scss';

export default function ArtworkPage() {
  const { id } = useParams();
  const [artwork, setArtwork] = useState({});

  useEffect(() => {
    const fetchArtwork = async () => {
      try {
        const { data } = await axios.get(`artworks/${id}`);
        setArtwork(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchArtwork();
  }, [id]);

  return artwork.title ? (
    <div className='artwork'>
      <h1 className='artwork__title'>{artwork.title}</h1>
      <div className='artwork__image'>
        <img
          alt={artwork.title}
          src={'http://localhost:3001/img/artworks/' + artwork.path}
        />
      </div>
      <div className='artwork__footer'>
        <div>{artwork.author?.name} </div>
        <div>
          {artwork.likeCount} <HiHeart className='card__icon' />
        </div>
      </div>
    </div>
  ) : null;
}

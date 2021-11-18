import axios from 'axios';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import useDebounce from '../../utils/useDebounce';
import useClickOutside from '../../utils/useClickOutside';

import './Searchbar.scss';

export default function Searchbar() {
  const clickRef = useRef();
  const [users, setUsers] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [active, setActive] = useState(false);
  const [input, setInput] = useState('');
  const queryValue = useDebounce(input, 600);
  useClickOutside(clickRef, setActive.bind(null, false));

  const showModal = useCallback(
    (boolean = true) => {
      if (!input) return setActive(false);
      if (!(users.length || artworks.length)) return setActive(false);

      setActive(boolean);
    },
    [input, users.length, artworks.length]
  );

  useEffect(() => {
    if (!queryValue) return;

    const fetchData = async () => {
      const { data } = await axios.get(`/search?q=${queryValue}`);

      setUsers(data.users);
      setArtworks(data.artworks);
    };

    fetchData();
  }, [queryValue]);

  useEffect(() => {
    showModal();
  }, [showModal]);

  return (
    <div className='searchbar' ref={clickRef} onClick={showModal}>
      <div className='searchbar__wrapper'>
        <FaSearch className='searchbar__icon' />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Search`}
          className='searchbar__input'
          type='text'
        />
      </div>
      {active ? (
        <div className='searchbar__modal'>
          {users.length ? <h3 className='searchbar__heading'>Users</h3> : null}
          {users.map((user) => (
            <Link onClick={() => setInput('')} to={`/users/${user.name}`}>
              <div className='searchbar__result' key={user._id}>
                {user.name}
              </div>
            </Link>
          ))}
          {artworks.length ? (
            <h3 className='searchbar__heading'>Artworks</h3>
          ) : null}
          {artworks.map((artwork) => (
            <Link onClick={() => setInput('')} to={`/artworks/${artwork._id}`}>
              <div className='searchbar__result' key={artwork._id}>
                {artwork.title}
              </div>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

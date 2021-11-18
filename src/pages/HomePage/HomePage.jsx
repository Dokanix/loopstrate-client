import { NavLink } from 'react-router-dom';

import ArtworkGrid from '../../components/ArtworkGrid/ArtworkGrid';
import './HomePage.scss';

export default function HomePage({ sort }) {
  return (
    <>
      <header className='artworks__header'>
        <NavLink
          className={({ isActive }) =>
            `button ${isActive ? 'button--primary' : null}`
          }
          to='/hot'
        >
          Hot
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `button ${isActive ? 'button--primary' : null}`
          }
          to='/top'
        >
          Top
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `button ${isActive ? 'button--primary' : null}`
          }
          to='/new'
        >
          New
        </NavLink>
        <h1 className='artworks__heading'>Artworks</h1>
      </header>
      <ArtworkGrid source={`artworks/${sort}`} />
    </>
  );
}

import ArtworkGrid from '../../components/ArtworkGrid/ArtworkGrid';
import './LikedPage.scss';

export default function LikedPage() {
  return (
    <div>
      <h1 className='heading'>Liked Artworks</h1>
      <ArtworkGrid source='/artworks/liked' />
    </div>
  );
}

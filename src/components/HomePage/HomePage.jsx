import ArtworkGrid from '../ArtworkGrid/ArtworkGrid';
import '../../styles/container.scss';

const HomePage = () => {
  return (
    <div className='container'>
      <h1>Newest Beauties</h1>
      <ArtworkGrid />
    </div>
  );
};

export default HomePage;

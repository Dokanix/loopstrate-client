import { Routes, Route, Navigate } from 'react-router-dom';
import UserContext from './utils/UserContext';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import useLocalStorage from './utils/useLocalStorage';
import './App.css';
import './styles/container.scss';
import Navbar from './components/Navbar/Navbar';
import ArtworkPage from './pages/ArtworkPage/ArtworkPage';
import HomePage from './pages/HomePage/HomePage';
import UploadPage from './pages/UploadPage/UploadPage';
import LikedPage from './pages/LikedPage/LikedPage';

function App() {
  const [user, setUser] = useLocalStorage('user', {});

  return (
    <div className='main'>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Navigate replace to='/hot' />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/users/:name' element={<ProfilePage />} />
            <Route path='/hot' element={<HomePage sort='hot' />} />
            <Route path='/top' element={<HomePage sort='top' />} />
            <Route path='/new' element={<HomePage sort='new' />} />
            <Route path='/liked' element={<LikedPage />} />
            <Route path='/artworks/:id' element={<ArtworkPage />} />
            <Route path='/upload' element={<UploadPage />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;

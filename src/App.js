import { Routes, Route } from 'react-router-dom';
import UserContext from './utils/UserContext';
import HomePage from './components/HomePage/HomePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import useLocalStorage from './utils/useLocalStorage';
import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [user, setUser] = useLocalStorage('user', {});

  return (
    <div className='main'>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/me' element={<ProfilePage />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;

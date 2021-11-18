import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

import useAuth from '../../utils/useAuth';
import '../../styles/form.scss';
import '../../styles/button.scss';

export default function UploadPage({ redirected = '/hot' }) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', file);

    try {
      const { data } = await axios.post('artworks', formData);
      navigate(`/artworks/${data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user.name) return <Navigate replace to={redirected} />;

  return (
    <form onSubmit={handleSubmit} className='form'>
      <h1 className='form__title'>Upload</h1>
      <div className='form__field'>
        <input
          required
          placeholder='Title'
          className='form__input'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id='titleInput'
        />
        <label className='form__label' htmlFor='titleInput'>
          Title
        </label>
      </div>
      <div className='form__field'>
        <input
          required
          className='form__input'
          onChange={(e) => setFile(e.target.files[0])}
          id='fileInput'
          type='file'
          accept='image/*'
        />
        <label className='form__label' htmlFor='fileInput'>
          File
        </label>
      </div>
      <button className='button button--primary form__submit'>Upload</button>
    </form>
  );
}

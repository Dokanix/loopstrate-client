import { useState } from 'react';

const useError = (time) => {
  const [error, setError] = useState('');

  const setErrorAndTimeout = (value) => {
    setError(value);
    setTimeout(() => {
      setError('');
    }, time * 1000);
  };

  return [error, setErrorAndTimeout];
};

export default useError;

import { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

const Error = () => {
  const { error } = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => {
    if (!error) history.push('/');
  }, [error, history]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <p className="font-medium text-lg md:text-xl text-themePurple mb-6 text-center mx-4">
        There seems to be a
        {error}
      </p>
      <button type="button" onClick={() => history.goBack()} className="text-center text-xs md:text-sm rounded bg-themeGreen text-bold text-white w-56 py-6 opacity-100 hover:opacity-75">
        Reload
      </button>
    </div>
  );
};

export default Error;

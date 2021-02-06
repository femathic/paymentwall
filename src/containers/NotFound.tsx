import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="w-full h-screen flex flex-col items-center justify-center">
    <p className="font-medium text-lg md:text-xl text-themePurple mb-6 text-center mx-4"> This page can not be found</p>
    <Link to="/" className="text-center text-xs md:text-sm rounded bg-themeGreen text-bold text-white w-56 py-6 opacity-100 hover:opacity-75">
      Go to Home
    </Link>
  </div>
);

export default NotFound;

import { NavLink, Link } from 'react-router-dom';
import Logo from '../images/pw.png';

const TopNav = () => (
  <nav className="fixed top-0 left-0 flex justify-between items-center py-5 px-3 md:px-16 xl:px-32 bg-white dark:bg-themeBlack text-themeBlack dark:text-white w-full h-18 fixed z-40 shadow-xl">

    <Link to="/home" className="flex justify-center items-center">
      <img src={Logo} className="w-10 md:w-12 lg:w-14 mx-4" alt="Nectar Records" />
      <p className="font-extrabold text-lg md:text-xl tracking-wider italic text-themePurple dark:text-white opacity-100 hover:opacity-75">Paymentwall</p>
    </Link>

    <ul className="flex justify-center hidden md:block">
      <li className="m-0 p-0 relative group inline">
        <NavLink to="/" className="whitespace-no-wrap no-underline font-semibold hover:font-extrabold text-xs md:text-sm py-2 mr-4 lg:mr-6">
          <i className="fas fa-sign-in-alt mr-1" />
          Login
        </NavLink>
      </li>
      <li className="m-0 p-0 inline">
        <Link
          to="/"
          className="px-4 py-1 rounded text-xs md:text-sm focus:outline-none border-2 border-themeBlack dark:border-white text-themeBlack dark:text-white hover:text-white dark:hover:text-themeBlack hover:bg-themeBlack dark:hover:bg-white shadow-xl ml-0 sm:ml-2 font-semibold mt-4 sm:mt-0"
        >
          Support
        </Link>
      </li>
    </ul>
  </nav>
);

export default TopNav;

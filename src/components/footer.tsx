const Footer = ({ toggleDarkMode }: {toggleDarkMode: Function}) => (
  <footer className="fixed bottom-0 left-0 w-full px-3 md:px-16 xl:px-32 py-5 flex justify-between items-center flex-wrap bg-white dark:bg-themeBlack shadow border-t-2 dark:border-t-0 text-themeBlack dark:text-white">
    <p className="text-xs tracking-wider font-semibold dark:font-medium">
      <span> &copy; 2021 Paymentwall. </span>
      <span className="hidden md:inline">&nbsp;&nbsp; All Rights Reserved.</span>
    </p>
    <div className="flex items-center">
      <label htmlFor="toggle" className="relative flex justify-center cursor-pointer mr-3 w-24 p-1 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-400 shadow-inner">
        <p className="transition duration-400 ease-in bg-gray-300 dark:bg-transparent w-full text-xs font-semibold text-center rounded-lg">Light</p>
        <p className="transition duration-400 ease-in bg-transparent dark:bg-gray-800 w-full text-xs font-semibold text-center rounded-lg">Dark</p>
        <input
          type="checkbox"
          id="toggle"
          className="w-full toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer hidden"
          onChange={() => toggleDarkMode()}
        />
      </label>
    </div>

  </footer>
);

export default Footer;

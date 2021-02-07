import { Suspense, lazy, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { GlobalProvider } from './context/GlobalState';
import useLocalStorage from './utils/useLocalStorage';
import useUpdateLogger from './utils/useUpdateLogger';

const Home = lazy(() => import('./containers/Home'));
const Error = lazy(() => import('./containers/Error'));
const NotFound = lazy(() => import('./containers/NotFound'));

const Layout = ({ Loader }: { Loader: any }) => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', true);
  useEffect(() => {
    const metaColor = document.querySelector('meta[name="theme-color"]');
    if (darkMode && metaColor) {
      metaColor.setAttribute('content', '#191B25');
    } else if (!darkMode && metaColor) {
      metaColor.setAttribute('content', '#FFFFFF');
    }
  }, [darkMode]);
  useUpdateLogger(`Darkmode- ${typeof darkMode} ${darkMode}`);

  return (
    <Router>
      <GlobalProvider>
        <div className={`w-full min-h-screen p-0 m-0 transform transition-all duration-700 ease-in-out ${darkMode ? 'scheme-dark bg-black' : 'bg-white'}`}>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Redirect exact from="/paymentwall" to="/" />
              <Route exact path="/">
                <Home toggleDarkMode={() => setDarkMode(!darkMode)} />
              </Route>
              <Route path="/error">
                <Error />
              </Route>
              <Route exact path="*" component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </GlobalProvider>
    </Router>
  );
};

export default Layout;

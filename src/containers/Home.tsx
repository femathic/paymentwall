import {
  Suspense, lazy, useState, useEffect,
} from 'react';
import useFetch from '../utils/useFetch';
import Loader from '../components/loader';

const TopNav = lazy(() => import('../components/topNav'));
const PaymentSummary = lazy(() => import('../components/paymentSummary'));
const PaymentMethods = lazy(() => import('../components/paymentMethods'));
const PaymentForm = lazy(() => import('../components/paymentForm'));
const Footer = lazy(() => import('../components/footer'));

const Home = ({ toggleDarkMode }: { toggleDarkMode: Function }) => {
  const [paymentDetail, setPaymentDetail] = useState({
    country: '', countryName: '', countryCode: '', defaultCountry: '', defaultCountryCode: '', currency: 'USD', amount: '0.00', paymentMethod: '',
  });
  useEffect(() => {
    useFetch('get', 'http://ip-api.com/json', null)
      .then((response: any) => {
        setPaymentDetail({
          ...paymentDetail,
          defaultCountry: response.data.country,
          defaultCountryCode: response.data.countryCode,
          country: `${response.data.country} ${response.data.countryCode}`,
          countryName: response.data.country,
          countryCode: response.data.countryCode,
        });
      });
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <TopNav />
      <div className="pt-24 w-full px-3 md:px-16 xl:px-32">
        <PaymentSummary paymentDetail={paymentDetail} setPaymentDetail={setPaymentDetail} />
        <div className="grid grid-cols-12 gap-6 flex justify-center pt-12 pb-24">
          <PaymentMethods paymentDetail={paymentDetail} setPaymentDetail={setPaymentDetail} />
          <PaymentForm paymentDetail={paymentDetail} />
        </div>
      </div>
      <Footer toggleDarkMode={toggleDarkMode} />
    </Suspense>
  );
};

export default Home;

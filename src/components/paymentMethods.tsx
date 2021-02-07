import { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch';

const PaymentMethods = (
  { paymentDetail, setPaymentDetail }: { paymentDetail: any, setPaymentDetail: Function },
) => {
  const [paymentMethodList, setPaymentMethodList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    useFetch('get', `https://api.paymentwall.com/api/payment-systems/?key=${process.env.REACT_APP_API_KEY}&country_code=${paymentDetail.countryCode}`, null)
      .then((response) => {
        if (response && response.data) {
          setPaymentMethodList(response.data);
        } else {
          setPaymentMethodList([]);
        }
        setLoading(false);
      });
    return () => {
      setPaymentMethodList([]);
      setLoading(true);
    };
  }, [paymentDetail.countryCode]);

  return (
    <div className="col-span-12 lg:col-span-5 bg-white dark:bg-themeBlack shadow-lg px-8 xl:px-16 py-10 text-themeBlack dark:text-white rounded">
      <p className="text-lg md:text-xl text-gray-800 dark:text-white font-bold tracking-tight mb-4">Select a Payment Method</p>
      <div className="flex flex-row lg:flex-col flex-wrap items-center justify-center">
        {(paymentMethodList.length > 0 && !loading)
          && paymentMethodList.map((paymentMethod: any) => (
            <button
              type="button"
              key={paymentMethod.id}
              onClick={() => {
                setPaymentDetail({ ...paymentDetail, paymentMethod: paymentMethod.id });
              }}
              className={`p-5 md:p-10 shadow rounded-lg block bg-gray-100 dark:bg-black m-4 focus:outline-none transform scale-100 hover:scale-105 ${paymentDetail.paymentMethod === paymentMethod.id && 'border-2 border-themeYellow'}`}
            >
              <img src={paymentMethod.img_url} alt={paymentMethod.name} className="w-full h-full" />
              <p className="text-base font-bold mt-10 tracking-tight">
                {paymentMethod.name}
              </p>
            </button>
          ))}
      </div>
      {(paymentMethodList.length === 0 && !loading)
        && (
          <p className="text-base text-gray-400 dark:text-gray-400 font-medium mt-10 tracking-tight">
            No payment method is available for your country yet. Choose a different country
          </p>
        )}
      {(loading)
        && (
          <p className="text-base text-gray-400 dark:text-gray-400 font-medium mt-10 tracking-tight">
            Loading payment methods...
          </p>
        )}
    </div>
  );
};

export default PaymentMethods;

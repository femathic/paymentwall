import { useRef, useEffect } from 'react';

const PaymentSummary = (
  { paymentDetail, setPaymentDetail }: { paymentDetail: any, setPaymentDetail: Function },
) => {
  const amountInput: any = useRef(null);
  useEffect(() => {
    if (amountInput.current) amountInput.current.focus();
  }, []);

  return (
    <div className="relative py-5 flex items-center flex-wrap bg-white dark:bg-themeBlack shadow-lg px-8 xl:px-16 pt-10 pb-8 text-themeBlack dark:text-white rounded">
      <label htmlFor="country">
        <select
          id="country"
          value={paymentDetail.country}
          onChange={(e) => {
            setPaymentDetail({
              ...paymentDetail, country: e.target.value, countryCode: e.target.value.split(' ')[0], countryName: e.target.value.split(' ')[1],
            });
          }}
          className="absolute top-0 right-0 mx-2 md:mx-6 my-2 md:my-4 px-3 py-2 text-xs md:text-sm lg:text-base font-bold bg-white dark:bg-themeBlack text-black dark:text-white border-2 border-themeBlack dark:border-white hover:border-themeYellow rounded focus:outline-none focus:border-themeYellow cursor-pointer"
        >
          <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value={`${paymentDetail.defaultCountryCode || ''} ${paymentDetail.defaultCountry || 'loading...'}`}>{paymentDetail.defaultCountry || 'loading...'}</option>
          <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="BR Brazil">Brazil</option>
          <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="KR Korea (Republic of)">Korea (Republic of)</option>
          <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="VN Vietnam">Vietnam</option>
          <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="CN China">China</option>
          <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="HK Hong Kong">Hong Kong</option>
        </select>
      </label>
      <div className="flex flex-col border-l-4 border-themeYellow pl-2 md:pl-6 py-1 sm:py-2 md:text-base mt-4">
        <p className="text-sm md:text-base text-themeYellow mb-4 font-bold">Amount</p>
        <div className="flex items-start">
          <label htmlFor="currency" className="inline flex items-start">
            <select
              id="currency"
              value={paymentDetail.currency}
              onChange={(e) => setPaymentDetail({ ...paymentDetail, currency: e.target.value })}
              className="inline w-14 md:w-16 text-sm md:text-base bg-white dark:bg-themeBlack text-black dark:text-white font-bold focus:outline-none border-0 cursor-pointer"
            >
              <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="USD">USD</option>
              <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="CAD">CAD</option>
              <option className="border-2 text-xs text-black dark:text-white hover:bg-themeYellow" value="RUB">RUB</option>
            </select>
          </label>
          <label htmlFor="amount" className="flex">
            <input type="number" id="amount" placeholder="0.00" ref={amountInput} value={paymentDetail.amount} onChange={(e) => setPaymentDetail({ ...paymentDetail, amount: e.target.value })} className="w-32 sm:w-10/12 text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold md:font-medium bg-transparent focus:outline-none border-0 cursor-pointer placeholder-gray-500 placeholder-opacity-25" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default PaymentSummary;

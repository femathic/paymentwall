import { useState } from 'react';
import validateCardNumber from '../utils/validateCardNumber';
import validateExpiry from '../utils/validateExpiry';
import formatCardNumber from '../utils/formatCardNumber';

const PaymentForm = ({ paymentDetail }: { paymentDetail: any }) => {
  const [form, setForm] = useState({
    name: '', cardNumber: '', cvv: '', date: '',
  });
  const validateAllFields = () => {
    if (form.name.length < 3 || form.cvv.length !== 3) return false;
    if (form.cardNumber.split(' ').join('').length !== 16 || !validateCardNumber(form.cardNumber.split(' ').join(''))) return false;
    if (form.date.length !== 5 || validateExpiry(form.date) !== 'correct') return false;
    return true;
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        validateAllFields();
      }}
      className="col-span-12 lg:col-span-7 flex flex-col bg-white dark:bg-themeBlack shadow-lg px-8 xl:px-16 py-10 text-themeBlack dark:text-white rounded"
    >
      <p className="text-lg md:text-xl text-gray-800 dark:text-white font-bold tracking-tight mb-6">Fill the Payment Form</p>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-black dark:text-white">
          <h5 className="font-bold text-sm md:text-base">Cardholder Name:</h5>
          <input type="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} id="name" placeholder="Full Name" className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none" autoComplete="off" />
        </label>
        {form.name.length > 0 && form.name.length < 3 && <p className="text-xs text-themeYellow pt-1 font-normal">Enter a valid Cardholder Name</p>}
      </div>

      <div className="flex flex-col mt-5">
        <label htmlFor="card number" className="text-black dark:text-white">
          <h5 className="font-bold text-sm md:text-base">Card Number:</h5>
          <input
            type="text"
            name="card number"
            value={form.cardNumber}
            onChange={(e) => {
              if (e.target.value === '') setForm({ ...form, cardNumber: '' });
              if (!/^[0-9\b]+$/.test(String(e.target.value).split(' ').join(''))) return;
              if (String(e.target.value).split(' ').join('').split('').length > 16) return;
              setForm({ ...form, cardNumber: formatCardNumber(e.target.value) });
            }}
            id="card number"
            placeholder="0000 0000 0000 0000"
            className="w-full mt-2 py-3 px-3 rounded-lg g-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none"
            autoComplete="off"
          />
          {String(form.cardNumber).split(' ').join('').split('').length > 0 && !validateCardNumber(String(form.cardNumber).split(' ').join('')) && <p className="text-xs text-themeYellow pt-1">Enter a valid Card number</p>}
        </label>
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="exp" className="text-black dark:text-white">
          <h5 className="font-bold text-sm md:text-base">Expiry Date:</h5>
          <input
            type="text"
            name="exp"
            value={form.date}
            onChange={(e) => {
              if (String(e.target.value).split('').length > 5) return;
              setForm({ ...form, date: e.target.value });
            }}
            id="exp"
            placeholder="mm/yy"
            className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none"
          />
        </label>
        {(form.date.length > 0 && validateExpiry(form.date) === 'incorrect date') && <p className="text-xs text-themeYellow pt-1"> Please check that the Card expiry date is correct and not exceeded.</p>}
        {(form.date.length > 0 && validateExpiry(form.date) === 'incorrect format') && <p className="text-xs text-themeYellow pt-1"> Please check that the Card expiry date is in&nbsp; (mm/yy) &nbsp;format.</p>}
      </div>

      <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label htmlFor="cvv" className="font-bold text-sm mb-2 ml-1">
            <h5 className="font-bold text-sm md:text-base">CVV:</h5>
            <input
              type="test"
              name="cvv"
              id="cvv"
              value={form.cvv}
              onChange={(e) => {
                if (e.target.value === '') setForm({ ...form, cvv: '' });
                if (!/^[0-9\b]+$/.test(e.target.value)) return;
                if (String(e.target.value).split('').length > 3) return;
                setForm({ ...form, cvv: e.target.value });
              }}
              placeholder="000"
              className="w-full mt-2 py-3 px-3 rounded-lg g-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none"
              autoComplete="off"
            />
            {form.cvv.length > 0 && form.cvv.length !== 3 && <p className="text-xs text-themeYellow pt-1 font-normal">Enter a valid CVV number</p>}
          </label>
        </div>
      </div>

      <button type="submit" disabled={!validateAllFields()} className="w-full flex justify-center items-center bg-themeYellow transform hover:scale-105 text-black font-bold py-4 px-6 rounded-lg mt-5 disabled:opacity-50 disabled:cursor-not-allowed">
        <i className="fas fa-lock fa-lg" />
        <span className="ml-2">{`Pay ${paymentDetail.amount} ${paymentDetail.currency}`}</span>
      </button>
    </form>

  );
};

export default PaymentForm;

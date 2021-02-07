import { useState } from 'react';
import validateCard from '../utils/validateCard';
import formatCardNumber from '../utils/formatCardNumber';

const PaymentForm = ({ paymentDetail }: { paymentDetail: any }) => {
  const [form, setForm] = useState({
    name: '', cardNumber: '', cvv: '', expYear: '', expMonth: '',
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="col-span-12 lg:col-span-7 flex flex-col bg-white dark:bg-themeBlack shadow-lg px-8 xl:px-16 py-10 text-themeBlack dark:text-white rounded"
    >
      <p className="text-lg md:text-xl text-gray-800 dark:text-white font-bold tracking-tight mb-6">Fill the Payment Form</p>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-black dark:text-white">
          <h5 className="font-bold text-sm md:text-base">Cardholder Name:</h5>
          <input type="name" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} id="name" placeholder="Full Name" className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none" autoComplete="off" />
        </label>
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
          {String(form.cardNumber).split(' ').join('').split('').length === 16 && !validateCard(String(form.cardNumber).split(' ').join('')) && <p className="text-xs text-themeYellow pt-1">Please check that the Card number is correct</p>}
        </label>
      </div>

      <div className="mb-2 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label htmlFor="expiration month" className="font-bold text-sm mb-2 ml-1">
            <h5 className="font-bold text-sm md:text-base">Exp Date:</h5>
            <select name="expiration month" value={form.expMonth} onChange={(e) => setForm({ ...form, expMonth: e.target.value })} className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none">
              <option value="01" className="text-xs text-black dark:text-white">January</option>
              <option value="02" className="text-xs text-black dark:text-white">February</option>
              <option value="03" className="text-xs text-black dark:text-white">March</option>
              <option value="04" className="text-xs text-black dark:text-white">April</option>
              <option value="05" className="text-xs text-black dark:text-white">May</option>
              <option value="06" className="text-xs text-black dark:text-white">June</option>
              <option value="07" className="text-xs text-black dark:text-white">July</option>
              <option value="08" className="text-xs text-black dark:text-white">August</option>
              <option value="09" className="text-xs text-black dark:text-white">September</option>
              <option value="10" className="text-xs text-black dark:text-white">October</option>
              <option value="11" className="text-xs text-black dark:text-white">November</option>
              <option value="12" className="text-xs text-black dark:text-white">December</option>
            </select>
          </label>
        </div>
        <div className="px-2 w-1/2">
          <label htmlFor="expiration month" className="font-bold text-sm mb-2 ml-1">
            <select value={form.expYear} onChange={(e) => setForm({ ...form, expYear: e.target.value })} className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none">
              <option value="2020" className="text-xs text-black dark:text-white">2020</option>
              <option value="2021" className="text-xs text-black dark:text-white">2021</option>
              <option value="2022" className="text-xs text-black dark:text-white">2022</option>
              <option value="2023" className="text-xs text-black dark:text-white">2023</option>
              <option value="2024" className="text-xs text-black dark:text-white">2024</option>
              <option value="2025" className="text-xs text-black dark:text-white">2025</option>
              <option value="2026" className="text-xs text-black dark:text-white">2026</option>
              <option value="2027" className="text-xs text-black dark:text-white">2027</option>
              <option value="2028" className="text-xs text-black dark:text-white">2028</option>
              <option value="2029" className="text-xs text-black dark:text-white">2029</option>
              <option value="2029" className="text-xs text-black dark:text-white">2030</option>
            </select>
          </label>
        </div>
      </div>

      <div className="mb-3 -mx-2 flex items-end">
        <div className="px-2 w-1/2">
          <label htmlFor="cvv" className="font-bold text-sm mb-2 ml-1">
            <h5 className="font-bold text-sm md:text-base">CVV:</h5>
            <input
              type="number"
              name="cvv"
              id="cvv"
              value={form.cvv}
              onChange={(e) => {
                if (String(e.target.value).split('').length > 3) return;
                setForm({ ...form, cvv: e.target.value });
              }}
              placeholder="000"
              className="w-full mt-2 py-3 px-3 rounded-lg g-white dark:bg-themeBlack border-2 border-black dark:border-white text-black dark:text-white text-sm focus:border-themeYellow focus:outline-none"
              autoComplete="off"
            />
          </label>
        </div>
      </div>

      <button type="submit" className="w-full flex justify-center items-center bg-themeYellow transform hover:scale-105 text-black font-bold py-4 px-6 rounded-lg mt-5">
        <i className="fas fa-lock fa-lg" />
        <span className="ml-2">{`Pay ${paymentDetail.amount} ${paymentDetail.currency}`}</span>
      </button>
    </form>

  );
};

export default PaymentForm;

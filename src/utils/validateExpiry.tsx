/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
const validateExpiry = (expiryDate: any) => {
  const today = new Date();
  let today_mm: any = today.getMonth() + 1;
  const today_yy = today.getFullYear() % 100;

  if (today_mm < 10) {
    today_mm = `0${today_mm}`;
  }

  const mm = expiryDate.substring(0, 2);
  const yy = expiryDate.substring(3);
  if (expiryDate.length < 5 || (expiryDate.substring(2, 3) !== '/') || isNaN(Number(mm)) || isNaN(Number(yy)) || mm > 12) return 'incorrect format';

  if (yy > today_yy || (yy == today_yy && mm >= today_mm)) return 'correct';
  return 'incorrect date';
};

export default validateExpiry;

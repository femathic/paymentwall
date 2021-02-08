/* eslint-disable no-plusplus */
/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
const validateCardNumber = (sixteenDigitString: any) => {
  let numSum = 0;
  let value;
  for (let i = 0; i < 16; ++i) {
    if (i % 2 == 0) {
      value = 2 * sixteenDigitString[i];
      if (value >= 10) {
        value = (Math.floor(value / 10) + value % 10);
      }
    } else {
      value = +sixteenDigitString[i];
    }
    numSum += value;
  }
  return (numSum % 10 == 0);
};

export default validateCardNumber;

import { currencies } from 'constants/utilConstant';

const currencyPicker = (value: String): { name: string; symbol: string } | undefined => {
  return currencies.find((c) => c.name === value);
};

const convertToCurrency = (value: number, currency: String) => {
  if (Number.isNaN(value)) {
    throw new Error('Invalid number provided for formatting.');
  }

  // Convert the number to a string with two decimal places
  const roundedValue = value / 100;
  const formattedValue = roundedValue.toFixed(2);

  // Pick Currency symbol
  const currencyLabel = currencyPicker(currency);

  // Add the Currency symbol and commas for thousands
  const euroFormattedValue = `${currencyLabel?.symbol}${formattedValue.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  )}`;

  return euroFormattedValue;
};

export { currencyPicker, convertToCurrency };
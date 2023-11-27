import { Currency } from 'models/metaData';

const CURRENCIES: Currency[] = [
  {
    name: 'EUR',
    symbol: '€',
  },
  {
    name: 'USD',
    symbol: '$',
  },
];

const EURO = 'EUR';
const SHIPPING_COST_PER = 0.1;

export { CURRENCIES, EURO, SHIPPING_COST_PER };

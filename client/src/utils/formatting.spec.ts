import { currencyPicker, convertToCurrency } from './formatting';

describe('Test - Text formats related Util Functions', () => {
  const value = 1399999;
  const currencyEuro = 'EUR';
  const currencyUsd = 'USD';
  it('should equal to €', () => {
    const actual = currencyPicker(currencyEuro);
    expect(actual).toEqual({
      name: 'EUR',
      symbol: '€',
    });
    expect(actual?.symbol).toEqual('€');
  });

  it('should equal to $', () => {
    const actual = currencyPicker(currencyUsd);
    expect(actual).toEqual({
      name: 'USD',
      symbol: '$',
    });
    expect(actual?.symbol).toEqual('$');
  });

  it('should not equal to $', () => {
    const actual = currencyPicker(currencyEuro);
    expect(actual).not.toEqual({
      name: 'USD',
      symbol: '$',
    });
    expect(actual?.symbol).not.toEqual('$');
  });

  it('should equal to €13,999.99', () => {
    const actual = convertToCurrency(value, currencyEuro);
    expect(actual).toEqual('€13,999.99');
  });

  it('should not equal to €13,999.00', () => {
    const actual = convertToCurrency(value, currencyEuro);
    expect(actual).not.toEqual('€13,999.00');
  });
});

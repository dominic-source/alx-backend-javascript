import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  // implement getter and setter for amount
  get amount() {
    return this._amount;
  }

  set amount(amount) {
    if (typeof amount === 'number') {
      this._amount = amount;
    }
  }

  // Implement getter and setter for currency
  get currency() {
    return this._currency;
  }

  set currency(currency) {
    if (currency instanceof Currency) {
      this._currency = currency;
    }
  }

  // This display the price
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

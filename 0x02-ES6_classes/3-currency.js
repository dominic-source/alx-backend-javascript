export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    }
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  // implement getter and setter for code
  get code() {
    return this._code;
  }

  set code(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  // Implement getter and setter for name
  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  // This display the currency
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}

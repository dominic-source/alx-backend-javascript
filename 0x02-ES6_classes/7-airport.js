export default class Airport {
  constructor(name, code) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  toString() {
    return `${this._code}`;
    // // return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`
  }
}

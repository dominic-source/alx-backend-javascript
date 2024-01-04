export default class Car {
  constructor(brand, motor, color) {
    this._brand = undefined;
    this._motor = undefined;
    this._color = undefined;
    if (typeof brand === 'string') this._brand = brand;
    if (typeof motor === 'string') this._motor = motor;
    if (typeof color === 'string') this._color = color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}

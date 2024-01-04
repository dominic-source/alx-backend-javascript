import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color, range);
    if (typeof brand === 'string') this._brand = brand;
    if (typeof motor === 'string') this._motor = motor;
    if (typeof color === 'string') this._color = color;
    if (typeof range === 'string') this._range = range;
  }

  static get [Symbol.species]() {
    return Car;
  }
}

// Add your Circle class here
class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return this._radius
  }

  get diameter() {
    return this.radius * 2;
  }

  set diameter(newDiameter) {
    this._radius = newDiameter / 2;
  }

  get circumference() {
    return Math.PI * this.diameter;
  }

  set circumference(newCircumference) {
    this._radius = newCircumference / (2 * Math.PI);
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

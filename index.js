class Polygon {
  constructor(array) {
    this._sides = array;
  }

  get countSides() {
    return this._sides.length;
  }

  get perimeter() {
    return this._sides.reduce((t,v) => t+v);
  }
}

class Triangle extends Polygon {
  sumOfSidesGreater(array) {
    const testArr = [...array];
    let returnVal = true;
    for (let i=0; i<testArr.length; i++) {
      if (testArr[0] + testArr[1] <= testArr[2]) {
        returnVal = false;
      }
      testArr.push(testArr.shift());
    }
    return returnVal;
  }

  get isValid() {
    let returnVal = false;
    if (this._sides.length === 3 && this.sumOfSidesGreater(this._sides)) {
      returnVal = true;
    }
    return returnVal;
  }
}

class Square extends Polygon {
  get isValid() {
    const testArr = [...this._sides];
    for (let i=0; i<testArr.length; i++) {
      if (testArr[0] !== testArr[1]) {
        return false;
      }
      testArr.push(testArr.shift());
    }
    return true;
  }

  get area() {
    return this._sides[0] ** 2;
  }
}
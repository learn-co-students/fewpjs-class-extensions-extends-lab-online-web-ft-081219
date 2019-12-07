class Polygon {
  constructor(sides) {
    this.sides = sides
    this.count = this.sides.length
  }

  get countSides() {
    return this.sides.length
  }

  get perimeter() {
    return this.sides.reduce((total,num) => total + num)
  }
}

class Triangle extends Polygon {

  get isValid() {
    if (this.count !== 3) return;
    let a = this.sides[0]
    let b = this.sides[1]
    let c = this.sides[2]

    return ((a + b > c) && (a + c > b) && (b + c > a))
  }
}

class Square extends Polygon {
  get isValid() {
    if (this.count !== 4) return;
    return this.sides.every(side => side === this.sides[0])
  }

  get area() {
    return this.sides[0] * this.sides[0]
  }
}

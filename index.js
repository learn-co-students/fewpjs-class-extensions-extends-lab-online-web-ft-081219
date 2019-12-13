class Polygon {
    constructor(sides){
        this.sides = sides
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        return this.sides.reduce((memo, side) => memo + side)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3){
            return (
                    (this.sides[0] + this.sides[1] > this.sides[2])
                    && (this.sides[1] + this.sides[2] > this.sides[0])
                    && (this.sides[0] + this.sides[2] > this.sides[1])
                    )
        }
        return false
    }
}

class Square extends Polygon {
    get area(){
        return this.isValid ? this.sides[0] * this.sides[0] : "Not a valid square"
    }

    get isValid(){
        return (this.countSides === 4) && (new Set(this.sides)).size === 1
    }
}

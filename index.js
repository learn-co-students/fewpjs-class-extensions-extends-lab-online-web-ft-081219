// Your code here

class Polygon{
    constructor(array){
        this.sides = array
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((memo,e) => {return e + memo}, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
     return  ( (this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[2] + this.sides[1] > this.sides[0]) && (this.sides[2] + this.sides[0] > this.sides[1]) )
    }

}

class Square extends Polygon{
    get area(){
       return this.sides[0] * this.sides[0]
    }

    get isValid(){
       return this.sides.reduce((memo,e) => {return e + memo}, 0) === this.sides[0] * 4
    }
}
// Add your Circle class here

class Circle {
    constructor(radius){
        this._radius = radius
    }
    get radius(){
        return this._radius
    }
    get diameter(){
        return this._radius * 2
    }

    get circumference(){
        const r2 = this._radius * 2
        return 3.14 * r2
    }
    get area(){
        return 3.14 * (this._radius ** 2)
    }
    set diameter(diameter){
        this._radius = diameter/2
        return this.diameter
    }

    set radius(r) {
        this._radius = r
        return this.radius
    }
    set circumference(c){
        this._radius = (c / 3.14) / 2
        return c
    }
}

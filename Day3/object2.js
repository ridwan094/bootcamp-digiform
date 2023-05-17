// parent class
class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return `I have a ` + this.carname;
    }
}

// children class
class Model extends Car { // extends = method untuk mewarisi sifat class yang kita buat sebelumnya
    constructor(brand, mod) {
        super(brand); // super buat manggil properti dan method yang ada di parent
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model
    }
}

mycar = new Model("Ford", "Mustang")
console.log(mycar.show());
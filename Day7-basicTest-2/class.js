// Memnbuat class dengan properti dan metode
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
    }
}

// Membuat instance dari class
const john = new Person('John', 25);

// Mengakses properti dari class
console.log(john.name); // Output: 'John'

// Memanggil metode dari instance
john.sayHello(); // Output: `Hello, my name is John and I'm 25 years old.`
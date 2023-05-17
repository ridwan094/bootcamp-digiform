/**
 Buatlah sebuah parent class Siswa dengan properti name, age, dan gender. Buatlah method getData yang mengembalikan string yang berisi informasi lengkap tentang siswa tersebut. Kemudian buat subclass NomorId yang merupakan turunan(children) dari class Siswa dengan tambahan properti idSiswa dan method getStudentInfo yang mengembalikan string yang berisi “ID Siswa” tersebut beserta nomor identitasnya. 
 */

// Parent class Siswa
class Siswa {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    getData() {
        return `Nama: ${this.name}, Umur: ${this.age}, Jenis Kelamin: ${this.gender}`;
    }
}

// Subclass NomorId
class NomorId extends Siswa {
    constructor(name, age, gender, idSiswa) {
        super(name, age, gender);
        this.idSiswa = idSiswa;
    }

    getStudentInfo() {
        return `ID Siswa: ${this.idSiswa}, ${this.getData()}`;
    }
}

const siswa1 = new Siswa("Diki Slebew", 25, "Male");
console.log(siswa1.getData());

const newSiswa = new NomorId("Lucinta noona", 20, "Female", "12345");
console.log(newSiswa.getStudentInfo());

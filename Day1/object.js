const person = {
    nama: "John Doe",
    umur: 30,
    pekerjaan: "Pengembang Web",
    alamat: {
        jalan: "Jl. Raya No. 123",
        kota: "Jakarta",
        negara: "Indonesia",
    },
    hobi: ["Olahraga", "Musik", "membaca"],
};
person.nama = "ridwan"
person.hobi.push("Menari")
console.log(person)
let ambilIdentitas = Object.keys(person) //ambil keys di dalam objek
console.log(ambilIdentitas)
let objectToString = JSON.stringify(person) //ubah objek ke bentuk string
console.log(objectToString)
let stringToJson = JSON.parse('{"nama":"John Doe","umur":30,"pekerjaan":"Pengembang Web"}') //Kebalikan dari JSON.stringify
console.log(stringToJson)
delete person.hon


let waktu = new Date() //ngambil waktu realtime
console.log(waktu)
console.log(waktu.getDate()) // ngambil tanggalnya doang
console.log(waktu.getMonth()) // ngambil bulannya doang
console.log(waktu.getYear()) // ngambil tahunnya doang
console.log(waktu.getHours()) // ngambil jamnya doang


//Class Dalam Javascript
class Orang {
    constructor(nama, umur) { //Ngasih bilai awal ke properti 
        this.nama = nama; //this.name merujuk ke nama ke objek yang kita buat, tanpa this nilai gak bakal disimpan diobjek
        this.umur = umur;
    }

    getNama() {
        return this.nama
    }

    getUmur() {
        return this.umur;
    }

    getAll() {
        return `Nama: ${this.nama}, Umur: ${this.umur}`
    }

    static inputData(nama) {
        return new Orang(nama, 0)
    }
}

const siswa = new Orang("Owi kun", 50)
console.log(siswa.getAll())
const guru = Orang.inputData("Danu")
console.log(guru.getAll())
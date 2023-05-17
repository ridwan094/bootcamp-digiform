class Persegi {
    constructor(lebar, tinggi) {
        this.lebar = lebar;
        this.tinggi = tinggi;
    }

    hitungLuas() {
        return this.lebar * this.tinggi;
    }
}

// Membuat objek persegi dengan lebar 5 dan tinggi 5
const persegi = new Persegi(5, 5);

// Menghitung luas persegi
const luas = persegi.hitungLuas();
console.log('Luas persegi:', luas);

console.log("==============================")

const nama = ["danu", "dini", "deni", "rizky", "rifky", "riki", "rizieq", "ridwan"];

function filterNama(namaOrang, cari) {
    const hasilFilter = namaOrang.filter(nama => nama.includes(cari));
    return hasilFilter;
}

const namaYangDicari = "da";
const hasil = filterNama(nama, namaYangDicari);

console.log(hasil);
console.log("===============================")


const laptop = [
    { id: 1, nama: "Lenoboy", harga: 15000000 },
    { id: 2, nama: "Asu REOG", harga: 50000000 },
    { id: 3, nama: "De El", harga: 10000000 },
    { id: 4, nama: "MSG", harga: 30000000 },
];

function filterLaptop(laptop, minHarga, maxHarga) {
    const filteredLaptops = laptop.filter((laptop) => {
        return laptop.harga >= minHarga && laptop.harga <= maxHarga;
    });

    return filteredLaptops;
}

const minHarga = 10000000;
const maxHarga = 40000000;
const filteredLaptops = filterLaptop(laptop, minHarga, maxHarga);

console.log(filteredLaptops);
console.log("============================");



// const laptop = [
//     { id: 1, nama: "Lenoboy", harga: 15000000 },
//     { id: 2, nama: "Asu REOG", harga: 50000000 },
//     { id: 3, nama: "De El", harga: 10000000 },
//     { id: 4, nama: "MSG", harga: 30000000 },
// ];

// function filterLaptop(laptop, minHarga, maxHarga) {
//     const filteredLaptops = [];

//     for (let i = 0; i < laptop.length; i++) {
//         const currentLaptop = laptop[i];
//         if (currentLaptop.harga >= minHarga && currentLaptop.harga <= maxHarga) {
//             filteredLaptops.push(currentLaptop);
//         }
//     }

//     return filteredLaptops;
// }

// const minHarga = 10000000;
// const maxHarga = 40000000;
// const filteredLaptops = filterLaptop(laptop, minHarga, maxHarga);

// console.log(filteredLaptops);

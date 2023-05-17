/**
 * Buatlah sebuah fungsi dengan nama "filterLaptop" yang menerima tiga parameter, yaitu array laptop, minimal harga, dan maksimal harga (laptop, minHarga, maxHarga). Fungsi ini akan mencari laptop yang memiliki harga di antara minimal harga dan maksimal harga, lalu mengembalikan nilai array baru yang hanya berisi laptop-laptop yang telah ddi filter tersebut.
 */

const laptop = [
    { id: 1, nama: "Lenovo", harga: 4000000 },
    { id: 2, nama: "Asus", harga: 75000000 },
    { id: 3, nama: "Acer", harga: 30000000 },
    { id: 4, nama: "MSI", harga: 55000000 },
];

function filterLaptop(laptop, minHarga, maxHarga) {
    const filteredLaptops = [];

    for (let i = 0; i < laptop.length; i++) {
        const checkLaptop = laptop[i];
        if (checkLaptop.harga >= minHarga && checkLaptop.harga <= maxHarga) {
            filteredLaptops.push(checkLaptop);
        }
    }

    return filteredLaptops;
}

const minHarga = 40000000;
const maxHarga = 75000000;
const filteredLaptops = filterLaptop(laptop, minHarga, maxHarga);

console.log(filteredLaptops);
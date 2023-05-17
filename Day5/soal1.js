/**
 * Buatlah program untuk membaca file menggunakan fs.readSync dan juga split menggunakan bahasa pemrograman javascript, dan buatlah codingan yang mudah dan dapat difahami
 */
// .split digunakan untuk mengubah string menjadi array
// readFileSync digunakan untuk membaca file dan mengembalikan contentnya

// const fs = require('fs'); //Module node untuk akses file system
// console.log("mulai");

// const readSortAndWriteNumbers = async () => { // Buat fungsi menggunakan async await

//     try { // Bila kondisi program benar
//         const fileData = await fs.promises.readFile('Day5/nilai.txt', 'utf8'); //Membaca file yang ditunjuk
//         const numbers = fileData.split(','); //Melakukan split data dari file 

//         const sortedNumbers = numbers.sort((a, b) => a - b); // Melakukan pengurutan, bila angka lebih besar, maka akan ditukar

//         const newData = sortedNumbers.join(','); //

//         await fs.promises.writeFile('Day5/nilai1.txt', newData);

//         console.log(sortedNumbers);
//     } catch (err) {
//         console.error('Terjadi kesalahan:', err);
//     }

// };
// console.log("akhir");

// setTimeout(readSortAndWriteNumbers, 2000);

// async await
// const fs = require('fs'); //Module node untuk mengakses file system

// const readSortNumber = async () => {  // arrow function untuk asynchronous bernama readSortNumber

//     try { // Bila Program Benar
//         const fileData = await fs.promises.readFile('Day5/nilai.txt', 'utf8');  //Membaca file dari module 
//         const number = fileData.split(','); //Membuat isi file menjadi array

//         const sortedNumber = number.sort((a, b) => a - b); //Mengurutkan dan membandingkan apakah nilai kedua lebih besar daripada nilai pertama, jika iya, akan mengurutkan nilai dari terkecil

//         const newData = sortedNumber.join(','); //untuk menambahkan string , menggunakan join pada file
//         console.log("Mulai");

//         await fs.promises.writeFile('Day5/nilai.txt', newData);  //Membuat/Write data baru dengan urutan yang telah dikelompokkan

//         console.log(sortedNumber);
//     } catch (err) {
//         console.error('Terjadi Kesalahan:', err) //Kondisi bila error
//     }
// };
// console.log("Akhir")
// readSortNumber() //Memanggil fungsi


//Callback
const fs = require('fs');

const readSortAndWriteNumbers = (callback) => {

    fs.readFile('Day5/nilai.txt', 'utf8', (err, fileData) => {
        if (err) {
            console.error('Terjadi kesalahan:', err);
            callback(err);
            return;
        }

        console.log("mulai");
        const numbers = fileData.split(',');

        const sortedNumbers = numbers.sort((a, b) => a - b);

        const newData = sortedNumbers.join(',');

        fs.writeFile('Day5/nilai.txt', newData, (err) => {
            if (err) {
                console.error('Terjadi kesalahan:', err);
                callback(err);
                return;
            }

            console.log(sortedNumbers);
            callback(null, sortedNumbers);
        });
    });
};
console.log("akhir");

readSortAndWriteNumbers((err, result) => {
    if (err) {
        console.error('Terjadi kesalahan:', err);
        return;
    }

    // Lakukan sesuatu dengan hasil yang diterima (result)
});


// Promise
// const fs = require('fs').promises;

// const readSortAndWriteNumbers = async () => {
//     try {

//         console.log("mulai");
//         const fileData = await fs.readFile('Day5/nilai.txt', 'utf8');
//         const numbers = fileData.split(',');
//         const sortedNumbers = numbers.sort((a, b) => a - b);
//         const newData = sortedNumbers.join(',');

//         await fs.writeFile('Day5/nilai.txt', newData);

//         console.log("Data telah diurutkan dan ditulis ulang ke file:", sortedNumbers);
//     } catch (err) {
//         console.error('Terjadi kesalahan:', err);
//     }
// };
// console.log("akhir");

// readSortAndWriteNumbers();

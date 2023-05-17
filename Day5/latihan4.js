//readline pada node.js
/**
 * readline = sama kek argumen input
 * fungsinya buat masukin inputan kedalam CLI
 */
/**
 * Buat variabel buat nampung modul readline tersebut pake require
 * .createInterface() buat bikin interface yang ngebaca input dari user
 */

const readline = require('readline').createInterface({
    input: process.stdin, //Buat nerima input
    output: process.stdout //Buat output
})

//Fungsi buat minta inputan dari user
function input(prompt) {
    return new Promise((callback, error) => {
        //Buat nampilin prompt di console
        readline.question(prompt, (inputnya) => {
            //Buat close interface readline setelah user nginput
            readline.close();
            //Panggil callback dengan nilai yang di inputin user
            callback(inputnya);
        });
    });
}

//Eksekusi program pake asynchronous
(async () => {
    try {
        //minta inputan
        const name = await input("Masukkan nama: ");
        console.log(`Halo, ${name}!`);
    } catch (err) {
        console.error(err);
    }
})();
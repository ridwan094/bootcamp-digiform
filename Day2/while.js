// let i = 5;
// while (i < 5) {
//     console.log("Nilai loop ke - " + i);
//     i++;
// }

//Contoh while loop mencari bilangan prima
let n = 20; //Cari bilangan prima 1 sampe 20
let i = 2; //Inisialisasi bilangan prima terkecil
while (i <= n) { //Selama nilai 1 kurang dari atau sama dengan n, maka dia bakal loop sampe kondisi terpenuhi 
    let bilanganPrima = true; // Inisialisasi variabel bilangan prima dengan nilai true 
    let j = 2; // Inisialisasi variabel untuk dimasukkan ke rumus
    while (j < 1) { // Selama nilai j kurang dari 1, maka loop berjalan
        if (i % j === 0) { // Jika 1 bisa dibagi dengan j, maka i bukan bilangan prima
            bilanganPrima = false; // Ubah nilai menjadi false
            break; //loop selesai
        }
        j++ //Increment atau menambahkan 1 ke nilai j tiap kali loop selesai
    }
    if (bilanganPrima) { //Jika bilanganPrima bernilai true maka 1 adalah bilangan prima
        console.log(i); //Output nilai 1 
    }
    i++
}
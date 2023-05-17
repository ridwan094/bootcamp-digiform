/**
 * Buatlah sebuah program javascript menggunakan OOP, dengan memasukkan opsi untuk input panjang track menggunakan readline, mulai balapan, 
 */

const readline = require('readline');

class Mobil { // Membuat Kelas dengan nama Mobil
    constructor(icon, minKecepatan, maxKecepatan) { // Kelas ini memiliki properti icon, minKecepatan, dan maxKecepatan. dan posisi
        this.icon = icon;
        this.minKecepatan = minKecepatan;
        this.maxKecepatan = maxKecepatan;
        this.posisi = 0;
    }

    acakKecepatan() { // Metode acak kecepatan, digunakan untuk menghasilkan kecepatan secara acak antara minKecepatan dan MaxKecepatan
        return Math.floor(Math.random() * (this.maxKecepatan - this.minKecepatan + 1)) + this.minKecepatan;
    }

    maju() { // Metode maju, digunakan untuk menggerakkan mobil ke depan dengan menambahkan kecepatan secara acak ke posisi mobil.
        this.posisi += this.acakKecepatan();
        if (this.posisi > panjangTrack) { // jika posisi melebihi panjang track, posisi diatur menjadi panjang track
            this.posisi = panjangTrack;
        }
    }

    render() { // Metoe render(), digunakan untuk mengembalikan representasi visual mobil di track.
        let track = '='.repeat(this.posisi);
        return `${track}${this.icon}${'='.repeat(panjangTrack - this.posisi)}`;
    }
}

class MobilBalap extends Mobil { //Merupakan turunan dari Mobil
    constructor(icon, minKecepatan, maxKecepatan, nama) { // Menambahkan nama untuk menyimpan nama mobil
        super(icon, minKecepatan, maxKecepatan);
        this.nama = nama;
    }

    tampilkanNama() { // Menampilkan nama mobil
        console.log(`Nama Mobil: ${this.nama}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let panjangTrack, jumlahMobil;
const mobils = [];

function startBalapan() { //Memulai simulasi balapan dengan melakukan loop-while sampai ada pemenang.

    return new Promise((resolve, reject) => {
        let pemenang = null;
        let jarakPemenang = 0;

        while (pemenang === null) {
            mobils.forEach(mobil => {
                mobil.maju(); //setiap mobil di panggil metode maju() untuk memperbaharui posisi mobil.

                if (mobil.posisi >= panjangTrack && (pemenang === null || mobil.posisi > jarakPemenang)) { //Jika ada mobil yang mencapai atau melebihi panjang track dan memiliki posisi lebih jauh dari jarak pemenang sebelumnya, mobil tersebut menjadi pemenang.

                    pemenang = mobil;
                    jarakPemenang = mobil.posisi;
                }
            });

            mobils.forEach(mobil => console.log(mobil.render())); //setiap mobil dipanggil metode render(), untuk menampilkan visualisasi track.

            if (pemenang !== null) {
                console.log(`Pemenang balapan: ${pemenang.nama}`);
                resolve();
            }
        }
    });
}

function inputIconMobil(i) { // Meminta pengguna untuk memasukkan ikon mobil ke-i
    return new Promise((resolve, reject) => {
        rl.question(`Input icon mobil ke-${i + 1}: `, icon => {
            resolve(icon);
        });
    });
}

function inputKecepatanMobil(i, icon) { // Meminta pengguna untuk memasukkan kecepatan minumum dan maksumum dari mobil ke-i 
    return new Promise((resolve, reject) => {
        rl.question(`Input min kecepatan mobil ke-${i + 1}: `, minKecepatan => {
            rl.question(`Input max kecepatan mobil ke-${i + 1}: `, maxKecepatan => {
                resolve({ icon, minKecepatan: Number(minKecepatan), maxKecepatan: Number(maxKecepatan) });
            });
        });
    });
}

async function main() { // Untuk memulai simulasi balapan.
    try {
        const inputPanjangTrack = await promptQuestion('Input panjang track: '); //meminta pengguna untuk memasukkan panjang track
        const inputJumlahMobil = await promptQuestion('Input jumlah mobil: '); //meminta pengguna untuk memasukkan jumlaj mobil
        panjangTrack = Number(inputPanjangTrack);
        jumlahMobil = Number(inputJumlahMobil);
        if (jumlahMobil <= 0) { //Mengecek apakah jumlah mobil valid(lebih dari 0)
            throw new Error('Jumlah mobil harus lebih dari 0');
        }

        for (let i = 0; i < jumlahMobil; i++) { //Melakukan for-loop untuk meminta input ikon, kecepatan, dan nama mobil sebanyak jumlah mobil yang dimasukkan.

            const icon = await inputIconMobil(i);
            const { minKecepatan, maxKecepatan } = await inputKecepatanMobil(i, icon);

            const namaMobil = await promptQuestion(`Input nama mobil ke-${i + 1}: `);
            const mobil = new MobilBalap(icon, minKecepatan, maxKecepatan, namaMobil);
            mobils.push(mobil);

            if (mobils.length === jumlahMobil) { // Setelah semua mobil telah dimasukkan, panjang track, dan jumlah mobil ditampilkan.
                console.log(`Panjang Track: ${panjangTrack}`);
                console.log(`Jumlah Mobil: ${jumlahMobil}`);
                console.log();
                await startBalapan(); //Fungsi startBalapan() dipanggil.
                rl.close(); //Interface readline balapan ditutup setelah balapan selesai.
            }
        }
    } catch (error) {
        console.error(`Terjadi kesalahan: ${error.message}`);
        rl.close();
    }
}

async function promptQuestion(question) { // Meminta pengguna memasukkan input dengan pertanyaan tertentu.
    return new Promise((resolve, reject) => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

main();


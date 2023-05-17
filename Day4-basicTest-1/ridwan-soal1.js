/* Buatlah sebuah piramida yang terbuat dari Asterisk (*) dengan jumlah baris yang bisa ditentukan oleh user.*/

function buatPiramid(x) {
    let piramid = '';
    for (let i = 1; i <= x; i++) {
        piramid += ' '.repeat(x - i); // Menambahkan spasi sebelum bintang
        piramid += '* '.repeat(i); // Menambahkan bintang
        piramid += '\n'; // Pindah ke baris baru
    }
    return piramid;
}

const input = 5; // Jumlah baris piramida
const piramid = buatPiramid(input);
console.log(piramid);

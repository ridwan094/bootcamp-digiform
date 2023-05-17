/**
 * Buatlah sebuah rekursif, dari array dua dimensi. untuk mencari nilai 0 dari code di bawah ini, dan temukan indeks ke berapa yang bisa mendapatkan angka 0 sampai habis.
 */

const arrayDuaDimensi = [
    [0, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 0]
]

const cariAngka = (array, barisIndex = 0, kolomIndex = 0, hasil = []) => {
    if (barisIndex === array.length) {
        return hasil;
    }

    if (array[barisIndex][kolomIndex] === 0) {
        hasil.push([barisIndex, kolomIndex])
    }

    if (kolomIndex === array[barisIndex].length - 1) {
        return cariAngka(array, barisIndex + 1, 0, hasil);
    }

    return cariAngka(array, barisIndex, kolomIndex + 1, hasil);
}

const indeks = cariAngka(arrayDuaDimensi);

if (indeks.length === 0) {
    console.log("Tidak ditemukan angka 0 dalam array.");
} else {
    console.log("Angka 0 ditemukan pada indeks-indeks berikut:");
    indeks.forEach((indeks) => {
        console.log(indeks);
    });
}


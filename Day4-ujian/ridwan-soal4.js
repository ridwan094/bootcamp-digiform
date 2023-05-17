/**
 * Buatlah sebuah script untuk menyortir sebuah array yang berisikan buah buahan.
 */

const fruits = ['Pisang', 'Jeruk', 'Apel', 'Kaos Kaki']
console.log("Sebelum di sorting = " + fruits)

const sortFruits = (arr) => {
    return arr.sort();
}

console.log("------------------------------------------");
const sortingFruit = sortFruits(fruits);
console.log("Setelah di sorting menggunakan .sort= " + sortingFruit)
console.log("Kebalikan dari sort menggunakan .reverse= " + sortingFruit.reverse(fruits))
console.log("-----------Dalam bentuk Array-------------")
console.log(sortingFruit)
console.log(sortingFruit.reverse(fruits));

/**
 * Buatlah sebuah function dengan nama "sumArray" yang menerima satu parameter, yaitu variabel berisikan "array", dan mengembalikan hasil penjumlahan semua elemen(data) di dalam array tersebut.
 */
const sumArray = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            sum += array[i][j];
        }
    }
    return sum;
}

const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const total = sumArray(array)
console.log(total);
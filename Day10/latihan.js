/** Buat code  untuk mencari kombinasi berdasarkan input menggunakan argumen input (process.argv)*/

const input = process.argv[2];
const numbers = input.split('').map(Number);

const findCombinations = (numbers, index = 0, currentCombination = []) => {
    console.log(currentCombination);

    for (let i = index; i < numbers.length; i++) {
        currentCombination.push(numbers[i]);
        findCombinations(numbers, i + 1, currentCombination);
        currentCombination.pop();
    }
}

findCombinations(numbers);

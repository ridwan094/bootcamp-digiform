/**
 * Buatlah sebuah script untuk menemukan huruf terpanjang.
 */
const searchLongWord = (word) => {
    const wording = word.replace(/[^a-zA-Z ]/g, '').split(' ');

    let longWord = '';

    wording.forEach((words) => {
        if (words.length > longWord.length) {
            longWord = words;
        }
    });

    return longWord;
}

const word1 = "fun&!! time";
const word2 = "I love dogs";

console.log(searchLongWord(word1));
console.log(searchLongWord(word2));

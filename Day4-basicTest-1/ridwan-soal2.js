//Palindrome
/* Buatlah sebuah script untuk mengecek apabila input yang kita masukkan adalah palindrom. menggunakan bahasa javascript
*palindrom adalah susunan kata yang bisa dibaca dengan sama meskipun dibaca dari belakang (contoh : kasur rusak) */

function Palindrome(input) {
    let awalInput = input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let reverseInput = awalInput.split('').reverse().join('');

    return awalInput === reverseInput;
}

console.log("---")
console.log("Check Palindrome")
console.log("---")
let input = "scramble";
console.log("Masukkan kata: " + input)
console.log("---")
console.log(input);
if (Palindrome(input)) {
    console.log("Kata yang anda masukkan adalah Palindrome.");
} else {
    console.log("Kata yang anda masukkan bukan Palindrome.");
}
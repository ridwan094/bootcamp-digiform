// For loop untuk mencetak bilangan ganjil
for (let i = 1; i <= 50; i++) {
    if (i % 2 !== 0) {
        console.log(i + " adalah bilangan ganjil");
    }
}

function hitungRataRata(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total / arr.length;
}

const arr = [2, 4, 6, 8, 10];
const rataRataArr = hitungRataRata(arr);
console.log("Nilai rata-ratanya adalah = " + rataRataArr);

// function hitungKapital(string) {
//     let hitung = 0;

//     for (let i = 0; i < string.length; i++) {
//         let char = string[i];
//         if (char >= "A" && char <= "Z") {
//             hitung++;
//         }
//     }

//     return hitung;
// }

// const string1 = "Hi M4niEzzZ";
// const string2 = "Owi Kun";

// console.log("Banyaknya kapital: " + hitungKapital(string1));
// console.log("Banyaknya kapital: " + hitungKapital(string2));


// function hitungKapital2(string) {
//     let hitung = 0;
//     for (let i = 0; i < string.length; i++) {
//         if (string[i] === string[i].toUpperCase() && string[i] !== " " && string[i] !== "!") {
//             hitung++
//         }
//     }
//     return hitung;
// }

// const string3 = "Hi M4niEzzZ"
// const string4 = "Owi Kun"

// console.log(hitungKapital2(string3))

// function hitungKapital3(string) {
//     let hitung = 0;

//     for (let i = 0; i < string.length; i++) {
//         if (string[i] >= "A" || string[i] <= "Z" || string[i] >= "a" || string[i] <= "z") {
//             hitung++
//         }
//     }
//     return hitung;
// }

// const string4 = "Hi M4niEzzZ"
// const string5 = "Owi Kun"

// console.log(hitungKapital3(string4))

function hitungKapital4(string) {
    let hitung = 0;
    let hitung2 = 0;

    for (let i = 0; i <= string.length; i++) {
        if (string[i] >= "A" && string[i] <= "Z") {
            hitung++
        }
    }
    for (let i = 0; i <= string.length; i++) {
        if (string[i] >= "a" && string[i] <= "z") {
            hitung2++
        }
    }
    return ([`Kapital ${hitung}`, `Kecil ${hitung2}`])
}

const string1 = "Hi"
console.log(hitungKapital4(string1))
console.log(string1.length)
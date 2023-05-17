let hari = "2"

switch (parseInt(hari)) {
    case 1:
        console.log("This is Sunday");
        break;
    case 2:
        console.log("This is Monday");
        break;
    case 3:
        console.log("This is Tuesday");
        break;
    case 4:
        console.log("This is Wednesday");
        break;
    case 5:
        console.log("This is Thursday");
        break;
    case 6:
        console.log("This is Friday");
        break;
    case 7:
        console.log("This is Saturday");
        break;
    default:
        console.log("Input tidak valid");
        break;
}


let x = 6;
let nilai = x > 0 ? "nilai positif" : x < 0 ? "Nilai negatif" : "Nilai nol"
console.log(nilai)

let angka = 5
let jenis = angka > 0 ? "positif" : angka < 0 ? "negatif" : "nol";
console.log(`Angka ${angka} adalah bilangan ${jenis}.`); //backtik digunakan untuk menggabungkan string dan variabel menggunakan ${}
console.log("Angka " + angka + " adalah bilangan " + jenis); //opsi lain menggabungkan string dengan variabel menggunakan +

let matematika = 80
let fisika = 90
let kimia = 70
let hasil = (matematika + fisika + kimia) / 3;
console.log(parseInt(hasil))

// if (matematika >= 0 && matematika <= 100) {
//     if (fisika >= 0 && fisika <= 100) {
//         if (kimia >= 0 && kimia <= 100) {
//             if (hasil >= 80 && hasil <= 100) {
//                 console.log(`Selamat, Anda lulus! nilai Anda ${hasil}`)
//             } else {
//                 if (hasil >= 60 && hasil <= 79) {
//                     console.log(`Anda lulus! nilai Anda ${hasil}`)
//                 } else {
//                     console.log(`Anda Gagal! nilai anda ${hasil}`)
//                 }
//             }
//         }
//     } else {
//         console.log("Yang Anda masukkan salah!")
//     }
// }

if (matematika >= 0 && matematika <= 100 && fisika >= 0 && fisika <= 100 && kimia >= 0 && kimia <= 100) {
    if (hasil >= 80) {
        console.log(`Selamat, Anda lulus dengan baik! nilai Anda ${hasil}`)
    } else if (hasil >= 60) {
        console.log(`Anda lulus!`)
    } else {
        console.log("Anda tidak lulus!")
    }
} else {
    console.log("Nilai tidak valid")
}

// let i = 5;
// while (i < 5) {
//     console.log("Nilai loop ke - " + i);
//     i++;
// }

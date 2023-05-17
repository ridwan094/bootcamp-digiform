let a = 100
if (a > 70) {
    console.log("a lebih besar dari 100")
} else {
    console.log("a lebih kecil dari 100")
}

if (a == 100) {
    console.log("nilainya 100")
}

let classStatus = "closed";
let minuteRemain = 5
if (classStatus == "open") {
    console.log("Kelas bootcamp sedang berjalan")
} else if (minuteRemain <= 5) {
    console.log("kelas Bootcamp tersisa 5 menit lagi")
} else {
    console.log("Kelas bootcamp telah berakhir")
}

let grade = 83
if (grade >= 70) {
    if (grade >= 90) {
        console.log("Nilai A")
    } else {
        console.log("Nilai B")
    }
} else {
    console.log("Nilai C")
}
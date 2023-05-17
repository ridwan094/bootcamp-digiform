function test() {
    console.log("test")
}
test()

const sapa = (nama, nama2) => {
    console.log(`hai ${nama} ${nama2}`)
}

sapa("maniez", "queh")

const anonFunction = () => {
    console.log("anon")
}

anonFunction()

function Penjumlahan(angka) {
    return angka + 12
}
let hasil1 = Penjumlahan(6)
let hasil2 = Penjumlahan(9)
console.log(`hasil penjumlahan = ${hasil1}`)
console.log(`hasil penjumlahan = ${hasil2}`)


function cetakAngka(angka = 1) {
    return angka
}
let hasil = cetakAngka(3)
console.log(`Hasil cetakAngka ${hasil}`)

let hasill = cetakAngka(5)
console.log(`hasil cetakAngka ${hasill}`)
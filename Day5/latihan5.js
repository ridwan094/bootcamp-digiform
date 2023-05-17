//Belajar try catch pada javascript
function Pembagian(angka1, angka2) {
    try {
        //Kalau program sukses dia bakal eksekusi blok try
        if (angka2 === 0) {
            throw "Gabisa dibagi 0 cuy!"
        }
        return angka1 / angka2
    } catch (error) {
        //Kalau program error dia bakal eksekusi catch
        console.error(error);
        return null;
    }
}

let pembagian = Pembagian(10, 2)
console.log(pembagian);

let pembagian2 = Pembagian(10, 0)
console.log(pembagian2)
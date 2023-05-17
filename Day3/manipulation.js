const ages = [5, 10, 18, 20, 21, 25, 27, 30];

function checkAge(age) {
    return age > 18;
}

console.log(ages.find(checkAge)) //mencetak data yang pertama dicek
console.log(ages.filter(checkAge)) //mencetak semua data yang dicek

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi", 1, 2); // Untuk mengganti nilai dalam array
//Angka pertama untuk indeks, yang kedua panjang data(atau sampe mana data nya mau di ganti)
fruits.push("Durian", "Belimbing") // Push untuk nambahin data diakhir array
console.log(fruits);
console.log(fruits.pop()) //pop buat ngapus yang diakhir array
console.log(fruits.slice(1, 2)) //Mengambil data dalam array dan masukin(misahin) ke dalam array baru
console.log(fruits.sort()) //Buat sorting data berdasarkan urutan alfabet
console.log(fruits.reverse()) //Buat sorting tapi sebaliknya 


const ages2 = [3, 10, 18, 20, 21]
function checkAge2(age2) {
    return age2 > 18;
}

console.log(ages2.findIndex(checkAge2)) // Buat nyari indeks dalam suatu array, dan mencetak data yang pertama dicek

fruits.forEach(function (fruit) {
    console.log(`Buah : ${fruit}`);
    console.log("======================");
});


const buah = ["apple", "orange", "cherry"]
let item = fruits.forEach(myFunction);
function myFunction(item) {
    console.log("data : " + item);
}
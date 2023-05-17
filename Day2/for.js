//For loop
for (let i = 1; i <= 5; i++) {
    console.log(`nilai ke -  ${i}`);
}

//Mengalihkan elemen didalam array
const arr = [2, 3, 4, 5] // buat array
let result = 1 //buat variael result dengan nilai 1
console.log(arr.length);

//Buat variabel i dengan nilai 0, selama nilai i kurang dari panjang array maka dia bakal loop
for (let i = 0; i < arr.length; i++) {
    result *= arr[i] //hasilkan nilai result elemen array arr pada indeks ke i
}
console.log(result) //output
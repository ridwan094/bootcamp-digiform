// array multidimensi dengan tiga dimensi
const threeDimensionalArray = [ //artay 1
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    [ //array 2 
        [10, 20, 30], //array 3
        [40, 50, 60],
        [70, 80, 90]
    ]
];

//Akses data dalam array multidimensi
console.log(threeDimensionalArray[0]); //Output: [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
console.log(threeDimensionalArray[0][1]); //Output: [4, 5, 6]
console.log(threeDimensionalArray[0][1][2]) //Output: 6

//Ubah nilai pada elemen array multidimensi
const ubah = threeDimensionalArray[0][1][2] = 100;
console.log(threeDimensionalArray[0][1][2]) //Output: 100
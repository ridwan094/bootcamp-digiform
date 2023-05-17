// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let total;

// volumeA = a * a * a
// volumeB = b * b * b

// total = volumeA + volumeB

// console.log(total)

function kubikA(a, b) {
    volumeA = a * a * a
    volumeB = b * b * b
    total = volumeA + volumeB
    return total
}

console.log(kubikA(8, 3))

const volumeDuaBuahKubus = (x, y) => {
    let volumeX = x * x * x
    let volumeY = y * y * y
    let total = volumeX + volumeY
    return total
}

console.log(volumeDuaBuahKubus(6, 6))
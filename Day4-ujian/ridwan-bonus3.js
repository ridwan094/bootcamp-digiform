/**
 * Buatlah sebuah script untuk memastikan bahwa setiap bracket yang ada pada string memiliki pasangan. Jika setiap bracket memiliki pasangan maka outputnya adalah 1, jika ada bracket yang tidak memiliki pasangan maka outputnya adalah 0, jika tidak ada bracket sama sekali maka outputnya adalah 1. tolng gunakan bahasa pemrograman javascript dan buatlah codingan yang mudah dan dapat difahami.
 */

const checkBracketBalance = (a) => {
    let count = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === '(') {
            count++;
        } else if (a[i] === ')') {
            count--;
            if (count < 0) {
                return 0;
            }
        }
    }
    return count === 0 ? 1 : 0;
}

const input1 = "(coder)(byte))";
console.log(checkBracketBalance(input1));

const input2 = "(c(oder)) b(yte)";
console.log(checkBracketBalance(input2));
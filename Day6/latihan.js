const faktorial = (n) => {
    // Basis: jika n adalah 0 atau 1, faktorialnya adalah 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Rekursi: mengalikan n dengan faktorial dari n-1
    return n * faktorial(n - 1);
}

// Mengambil input dari argumen command line
const angka = parseInt(process.argv[2]);
console.log("Nilai Faktorial dari " + angka + " adalah: " + faktorial(angka));


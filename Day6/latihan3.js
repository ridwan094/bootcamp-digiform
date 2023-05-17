/**
 * buatlah sebuah rekursif, untuk menampilkan sebuah nama dari inputan console, jika inputan console menampilkan nama yang dicari(Anagram), maka akan mencetak "ketemu", namun jika tidak, akan mencetak "tidak ketemu". 
 */

const namaArray = [
    ['P', 'Z', 'W', 'Q', 'I'],
    ['R', 'S', 'F', 'K', 'D'],
    ['O', 'I', 'D', 'W', 'A'],
    ['N', 'N', 'V', 'A', 'N'],
    ['Z', 'T', 'A', 'N', 'U']
]

//Membuat arrow function dengan parameter grid, name, rowIndex, colIndex, dan found
const searchName = (grid, name, rowIndex = 0, colIndex = 0, found = false) => {
    // Jika nama telah ditemukan
    if (name.length === 0) {
        return true;
    }

    // Jika telah mencapai akhir baris, pindah ke baris selanjutnya dan mulai dari awal kolom
    if (colIndex >= grid[rowIndex].length) {
        colIndex = 0;
        rowIndex++;
    }

    // Jika telah mencapai akhir baris dari kolom, nama tidak ditemukan.
    if (rowIndex >= grid.length) {
        return false;
    }

    // Jika huruf pada grid sama dengan huruf pertama dari nama (dalam lowercase), lanjutkan pencarian
    if (grid[rowIndex][colIndex].toLowerCase() === name[0].toLowerCase()) {
        const remainingName = name.slice(1); // Ambil sisa huruf nama yang belum dicek

        //Looping untuk mencari kemungkinan nama berikutnya secara rekursif
        for (let i = 0; i < 2; i++) {
            const nextRow = rowIndex + i;
            if (nextRow < grid.length) {
                for (let j = 0; j < 2; j++) {
                    const nextCol = colIndex + j;
                    if (nextCol < grid[nextRow].length) {
                        const result = searchName(grid, remainingName, nextRow, nextCol, found);
                        if (result) {
                            return true;
                        }
                    }
                }
            }
        }
    }

    // Jika belum ditemukan, lanjutkan pencarian ke kolom berikutnya.
    return searchName(grid, name, rowIndex, colIndex + 1, found);
}

// Mengambil input dari command line menggunakan process.argv dan mengubah nilai string menjadi huruf kecil, yang artinya bisa mengecek huruf kecil dari inputan yand diberikan
const inputName = process.argv[2].toLowerCase();

// Memanggil fungsi pencarian nama
const result = searchName(namaArray, inputName);

//Menampilkan hasil
if (result) {
    console.log('Ketemu');
} else {
    console.log('Tidak Ketemu');
}
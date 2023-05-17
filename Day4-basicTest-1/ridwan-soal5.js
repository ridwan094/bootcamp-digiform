/**
 * Buatlah sebuah fungsi dengan nama "updateSiswa" yang menerima satu parameter (newData) berupa objek dengan properti yang akan diganti, dan mengembalikan nilai dari objek "siswa" yang sudah diperbarui.
 */

const updateSiswa = (newData) => {
    const siswa = {
        name: "Eimi Fukada",
        age: 20,
        address: "Shibuya, Tokyo"
    };

    Object.assign(siswa, newData)

    return siswa;
}


const newData = {
    age: 25,
    address: "Tokyo, Japan"
};

const siswaBaru = updateSiswa(newData);
console.log(siswaBaru);

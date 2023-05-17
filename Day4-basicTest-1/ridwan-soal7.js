/**
 * Buatlah program untuk menghitung total harga pembelian smartphone dengan menggunakan nested if. Jika total pembelian melebihi 1 juta, maka diberikan diskon sebesar 10%, sedangkan jika total pembelian melebihi 500 ribu, maka diberikan diskon sebesar 5%. Jika total pembelian kurang dari 500 ribu, tidak diberikan diskon. Jika harganya nol (0) maka cetak “harga tidak valid”. buatlah menggunakan bahasa javascript dan buatlah codingan yang mudah dan dapat difahami.
 */
const hitungTotalHarga = (jumlah, harga) => {
    let total = jumlah * harga;

    if (harga === 0) {
        return "Harga tidak valid!";
    } else {
        if (total > 1000000) {
            let diskon = 0.1;
            let hargaSetelahDiskon = total - total * diskon;

            return {
                total: total,
                diskon: diskon,
                hargaSetelahDiskon: hargaSetelahDiskon
            };
        } else if (total > 500000) {
            let diskon = 0.05;
            let hargaSetelahDiskon = total - total * diskon;

            return {
                total: total,
                diskon: diskon,
                hargaSetelahDiskon: hargaSetelahDiskon
            };
        } else {
            return {
                total: total
            };
        }
    }
};

let jumlah = 3;
let harga = 300000;
let hasil = hitungTotalHarga(jumlah, harga);
let smartphone = "samsung";

if (typeof hasil === "string") {
    console.log(hasil);
} else {
    console.log(
        `Anda membeli ${jumlah} ${smartphone} dengan harga ${harga} per smartphone. Total harga sebelum diskon adalah ${hasil.total}.`
    );

    if (hasil.diskon) {
        console.log(
            `Selamat! Anda mendapatkan diskon sebesar ${hasil.diskon * 100}%. Harga setelah diskon adalah ${hasil.hargaSetelahDiskon}.`
        );
    } else {
        console.log(
            `Maaf, Anda tidak mendapatkan diskon. Harga total adalah ${hasil.total}.`
        );
    }
}

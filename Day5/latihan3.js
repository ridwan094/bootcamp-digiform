//Argumen input pada javascript menggunakan 'process.argv'

//process.env = array yang berisi argumen-argumen yang ketik di CLI
if (process.argv.length === 2) { //Jika datanya arraynya sama dengan 2 maka akan cetak log 
    console.log("Expected at least one argument bro!");
    process.exit(1); //Setelah itu program dikahiri dengan exit
}

const custom = process.argv[2] || "Default";

//log yang ini untuk mencetak argumen yang sudah di input
console.log(`Argument text : ${process.argv[2]}`);
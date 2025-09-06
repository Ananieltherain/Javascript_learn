//========================= Task 01 luas lingkaran ==================================
const phi = 3.14
let jariJari = Number(prompt('Masukan jari-jari lingkaran : '))

const luasLingkaran = (phi, jariJari) => {
    alert(hasil luas lingkaran adalah = ${phi} ${jariJari})
}

luasLingkaran(phi * jariJari * jariJari) 

//========================= Task 2 luas segitiga ==================================
const setengah = 0.5
let alas = Number(prompt('Masukan alas segita kamu : '))
let tinggi = Number(prompt('Masukan tinggi segita kamu : '))

const luasSegitiga = (setengah, alas, tinggi) => {
    alert(setengah, alas, tinggi)
}

luasSegitiga(setengah * alas * tinggi) 

//========================= Task 3 luas persegi panjang ==================================
let panjang = Number(prompt('Berapa value panjang : '))
let lebar = Number(prompt('Berapa value lebar : '))

const persegiPanjang = (panjang, lebar) => {
   alert(panjang, lebar)
}

persegiPanjang(panjang * lebar) 

//========================= Task 4 luas jajar gejang ==================================
let alas = Number(prompt('Berapa value alas : '))
let tinggi = Number(prompt('Berapa value tinggi : '))

const jajaGenjang = (alas, tinggi) => {
    alert(alas, tinggi)
}

jajaGenjang(alas * tinggi) 

//========================= Mengetahui sistem gaji ==================================
alert('gaji karyawan IT DEVELOPMENT')

let inputNickname = prompt('nickname anda : ')
alert('Yeayy!!🎇🎇 Anda berhasil login kembali, selamat datang ' + inputNickname)


const databaseKaryawan = [{profesi : "Developer Web", gaji: 180000}, {profesi : "Developer App", gaji: 200000}, {profesi : "Data Analyst", gaji: 280000}, {profesi : "AI Engineer", gaji: 400000}]

const hariKerja = 25;
let inputKaryawan = prompt('Apa profesi kamu: ')

if (inputKaryawan == databaseKaryawan[0].profesi) {
    alert(databaseKaryawan[0].gaji * hariKerja);
} else if (inputKaryawan == databaseKaryawan[1].profesi) {
    alert(databaseKaryawan[1].gaji * hariKerja);
} else if (inputKaryawan == databaseKaryawan[2].profesi) {
    alert(databaseKaryawan[2].gaji * hariKerja);
} else if (inputKaryawan == databaseKaryawan[3].profesi) {
    alert(databaseKaryawan[3].gaji * hariKerja);
} else {
    alert('bing bong! profesi salah silahkan coba kembali')
}

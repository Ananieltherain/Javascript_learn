// Task saldo akhir, setor dan tariktunai

let saldo = 100000;

let userInput = Number(prompt('1. Setor 2. Tarik 3.Saldo'))


if (userInput == 1) {
    let setorTunai = Number(prompt('Jumlah setor Tunai : '));
    const saldoAkhir = saldo + setorTunai;
    alert('Berhasil setor saldo, jumlah saldo = ' + saldoAkhir);
} else if (userInput == 2) {
    let tarikSaldo = Number(prompt('Jumlah Tarik Tunai : '));
    const saldoAkhir = saldo - tarikSaldo;
        if (tarikSaldo > saldo) {
            alert('saldo lu kurang wkwkk miskin')
        } else {
            alert('Berhasil menarik saldo, saldo tersisa = ' + saldoAkhir)
        }
} else if (userInput == 3) {
    alert("saldo anda = " + saldo)
} 


/// Mengambil nama hari ini dari computer menggunaan syntax newDay()

let namaHari = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']

let hari = new Date().getDay()
console.log(hari)

if (hari == 1) {
    alert(namaHari[0])
} else if ( hari == 2 ) {
    alert(namaHari[1])
} else if ( hari == 3 ) {
    alert(namaHari[2])
} else if ( hari == 4 ) {
    alert(namaHari[3])
}
 else if ( hari == 5 ) {
    alert(namaHari[4])
} else if ( hari == 6 ) {
    alert(namaHari[5])
} else if ( hari == 7 ) {
    alert(namaHari[6])
} else {
    alert('anjai kiamat ini mah pak aaokwoakwk')
}

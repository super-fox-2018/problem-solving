//pseudocode
// 1. buat loop untuk tanggal start from 7 - 31
// 2. buat kondisi jika nilai i mod 5 sama dengan 0
// 3. print Tempat Fitnes Tutup
// 4. buat kondisi lain jika kondisi pertama sudah terpenuhi
// 5. buat looping untuk banyak anggota panjang banyak
// 6. buat variabel untuk jadwalPerHari masing-masing anggota
// 7. jika nilai i -7 lalu di mod index anggota yang di jadwalPerHari sama dengan 0
// 8. masukan nama ke array
// 9. print dan tambahkan ,

//Problem Solving
function fitnes(anggota) {
  for (let i = 7; i <= 31; i++) {
    if (i % 5 == 0) {
      console.log('Tanggal ' + i + ' : ' + 'Tempat Fitnes Tutup')
    } else {
      let tampung = []
      for (let j = 0; j < anggota.length; j++) {
        if ((i - 7) % anggota[j].jadwalPerHari == 0) {
          tampung.push(anggota[j].name)
        }
      }
      console.log('Tanggal ' + i + ' : ' + tampung.join(', '))
    }
  }
}
var anggotaFitnes = [{
  name: 'Tono',
  jadwalPerHari: 2
}, {
  name: 'Anton',
  jadwalPerHari: 4
}, {
  name: 'Budi',
  jadwalPerHari: 5
}]
console.log(fitnes(anggotaFitnes));

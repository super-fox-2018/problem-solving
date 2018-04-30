//Psedoode


// set enddate to 31
// set member to {tono : 2 ,anton : 4, budi : 5};
// set a to 0
// membuat perulangan dengan i dari 7 hingga enddate, dengan i ditambah 1
//  jika, i mod 5 sama dengan 0
//    maka, tampilkan 'Tanggal '+i+': Tempat Fitnes Tutup'
//  jika tidak
//    set arr to array kosong
//    membuat perulangan dari key dalam object member
//      jika, a mod member[key] sama dengan 0
//        maka, masukan key ke arr.
//  setelah perulangan key dalam object selesai,
//  tampilkan 'Tanggal '+i+': '+ arr
//  lalu a ditambahkan 1

var enddate = 31;
var a = 0;
var member = {Tono: 2, Anton: 4, Budi: 5};
for (var i = 7; i <= enddate; i++) {
  if(i%5===0){
    console.log('Tanggal '+i+': Tempat Fitnes Libur');
  }
  else {

    var arr = [];
    for (var key in member) {
      if(a%member[key]===0){
        arr.push(key);
      }

    }
    console.log('Tanggal '+i+': '+arr);
  }
  a++;
}


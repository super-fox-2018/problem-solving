/*
SET FUNCTION problemsolving with parameter mulaibuka and kelipatanTutup

set 'nama' to []

set 'i' to mulaibuka

FOR 'i' is less than 31
  set 'kurang' equals to i-7
  set 'tutup' is equals to i Modulus kelipatanTutup
  set 'nama' is equals to empty array

  IF tutup is equals to 0 THEN
   store 'Tempat fitness tutup' to 'nama'
  END IF

  IF 'kurang' Modulus 2 is equals to 0 AND tutup is not equals to 0 THEN
   store 'tono' to 'nama'

  IF 'kurang' Modulus 4 is equals to 0 AND tutup is not equals to 0 THEN
   store 'Anton' to 'nama'

  IF 'kurang' Modulus 5 is equals to 0 AND tutup is not equals to 0 THEN
   Store 'Budi' to 'nama'

   Display 'Tanggal ' + i +  ' : ' + nama.join(', ')

END FOR




END FUNCTION

*/
function problemsolving(mulaibuka, kelipatanTutup) {
  var nama = [];

  for (let i = mulaibuka; i <= 31; i++) {
    var kurang = i - 7;
    var tutup = i % kelipatanTutup;
    nama = [];

    if (tutup === 0) {
      nama.push('Tempat fitness tutup');
    }

    if (kurang % 2 === 0 && tutup !== 0) {
      nama.push('Tono');
    }

    if (kurang % 4 === 0 && tutup !== 0) {
      nama.push('Anton');
    }

    if (kurang % 5 === 0 && tutup !== 0) {
      nama.push('Budi');
    }

    console.log('Tanggal ' + i + ' : ' + nama.join(', '));
  }
}

problemsolving(7, 5);

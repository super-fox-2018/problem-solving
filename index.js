//
// PSEUDOCODE
//
// READ countTono = 0;
// READ countAnton = 0;
// READ countBudi = 0;
//
// READ startDate;
//
// FOR i = startDate, until i reaches 31
//   READ member AS empty array
//
//   IF i equals to startDate THEN
//     PUSH 'Tono', 'Anton', 'Budi' to member array
//     JOIN member array to string
//     DISPLAY 'Tanggal ' + i + ': ' + member
//   ELSE IF i mod 5 equals to 0 THEN
//     DISPLAY 'Tanggal ' + i + ': ' + 'Tempat Fitness Tutup'
//   ELSE
  //   IF countTono mod 2 equals to 0 THEN
  //     PUSH 'Tono' to member array
  //   ELSE IF countAnton mod 4 equals to 0 THEN
  //     PUSH 'Anton' to member array
  //   ELSE IF countBudi mod 5 equals to 0 THEN
  //     PUSH 'Budi' to member array
  //   END IF
//
//    JOIN member array to string
//    DISPLAY 'Tanggal ' + i + ': ' + member
//   END IF
//
//   INCREMENT countTono by 1
//   INCREMENT countAnton by 1
//   INCREMENT countBudi by 1
//
//   INCREMENT i by 1
//
// END FOR


function fitness(startDate, tono, anton, budi) {
  var countTono = 0;
  var countAnton = 0;
  var countBudi = 0;

  for (var i = startDate; i <= 31; i++) {
    var member = [];

    if (i === startDate) {
      member.push('Tono');
      member.push('Anton');
      member.push('Budi');

      console.log('Tanggal ' + i + ': ' + member.join(', '))
    }
    else if (i % 5 === 0) {
      console.log('Tanggal ' + i + ': ' + 'Tempat Fitness Tutup');
    }
    else {
      if (countTono % tono === 0) {
        member.push('Tono');
      }
      if (countAnton % anton === 0) {
        member.push('Anton');
      }
      if (countBudi % budi === 0) {
        member.push('Budi');
      }

      console.log('Tanggal ' + i + ': ' + member.join(', '));
    }

    countTono++;
    countAnton++;
    countBudi++;
  }
}

console.log(fitness(7, 2, 4, 5)) // first case
console.log(fitness(6, 3, 5, 7))

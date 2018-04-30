//SET person as a multi array with each array value are name and number
//SET absen as empty string
//SET FUNCTION hadir with parameter date, num, person
//    IF date % num EQUALS 0
//      THEN person insert into absen
//    END IF
//END FUNCTION hadir
//  LOOPING let a = begin untill end
//    SET absen EQUALS as empty array
//    SET var resetDate = a minus begin
//     IF a % 5 EQUALS 0
//       THEN display Tempat fitnes Libur
//       ELSE FOR let a = 0 until person.length
//     CALL FUNCTION with resetDate as date, person[a][1] as a num, person[a][0] as a person
//     DISPLAY tanggal as var a and absen
//  END FOR let a
//END FOR let a


function fitness(begin, end, member) {

	var person = member;

	var absen = [];

	function hadir(date, num, person) {
		if (date % num === 0) {
			absen.push(person);
		}
	}

	for (let a = begin; a <= end; a++) {
		absen = [];

		var resetDate = a - begin;
		if (a % 5 === 0) {
			console.log('tanggal ' + a + ' : Tempat Fitnes Libur');
		} else {
			for (let a = 0; a <= person.length - 1; a++) {
				hadir(resetDate, person[a][1], person[a][0]);
			}

			console.log('tanggal ' + a + ' : ' + absen);
		}
	}
}

fitness(7, 31, [['Tono', 2], ['Anton', 4], ['Budi', 5]]);

/**
 * PSEUDOCODE :
 * 
 * STORE members with an array contains every member object with name and schedule properties
 * STORE startingDay with value a number between 1 and 31
 * STORE closingMultiple with any number as multiple when the fitness is closed
 * FOR i = startingSchedule to 31 inclusive:
 *  STORE output with value of 'Tanggal ' + i + ': ';
 *  IF i % closingMultiple equals 0 THEN:
 *    CONCAT 'Tempat Fitness Tutup' to output;
 *  ELSE THEN:
 *    STORE comingList with value of empty array
 *    FOR j = 0 to members array's length:
 *      IF (i-startingDay) % members[j].schedule === 0 THEN:
 *        PUSH members[j].name to comingList array
 *      ENDIF
 *    ENDFOR
 *    CONCAT comingList array joined as string with ', ' as separator to output
 *  ENDIF
 *  PRINT output to console
 * ENDFOR
 */


function fitnessSchedule(members, startingSchedule, closingMultiple) {
  for (let i = startingSchedule; i <= 31; i += 1) {
    let output = `Tanggal ${i}: `;
    if (i % closingMultiple === 0) {
      output += 'Tempat Fitness Tutup';
    } else {
      let comingList = [];
      for (let j = 0; j < members.length; j += 1) {
        if ((i - startingSchedule) % members[j].multiple === 0) {
          comingList.push(members[j].name);
        }
      }
      output += comingList.join(', ');
    }
    console.log(output);
  }
}

const members = [{ name: 'Tono', multiple: 2}, { name: 'Anton', multiple: 4 }, { name: 'Budi', multiple: 5 }];

fitnessSchedule(members, 7, 5);

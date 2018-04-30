/*
  Function: Standard gym members calender

  parameters: start(number) -> start Date
              members(array of objects) -> Member details
Pseudocode:
  Create variable counter = 0
  FOR i from start to 31
    create variable output as empty array
    create variable arrMembers as an empty array

    push (date i :) to output

    IF i%5 is 0 THEN
      push ('Tempat Fitness Tutup')
    ELSE
      FOR j from 0 to members.length
        IF counter % members[j].name === 0 THEN
          push (members[j].name) to arrMembers
        ENDIF
      ENDFOR
    ENDIF
    Create variable result = output + arrMembers.join(', ')
    log out result
    counter = counter + 1
  ENDFOR
  return ''


*/

function gymCalender (start, members) {
  let counter = 0;

  for (let i = start; i <= 31; i++) {
    let output = []
    output.push('tanggal ' + i + ': ')
    let arrMembers = []
    if (i%5 === 0) {
      arrMembers.push('Tempat Fitness Tutup')
    }
    else {
      for(let j = 0; j < members.length; j++) {
        if(counter % members[j].Often === 0) {
          arrMembers.push(members[j].name);
        }
      }
    }
    let result = output + arrMembers.join(', ');
    console.log(result);
    counter += 1;
  } return '';
}

//Test Cases
console.log(gymCalender(7 , [
      {name: 'Tono', Often: 2},
      {name: 'Anton', Often: 4},
      {name: 'Budi', Often: 5},
    ]
  ));

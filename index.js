/*
  Function: Standard gym members calender

  parameters: start(number) -> start Date
              members(array of objects) -> Member details
Pseudocode:
  Create

*/

function gymCalender (start, members) {
  let counter = 0;

  for (let i = start; i <= 31; i++) {
    let output = [];
    output.push('tanggal ' + i + ': ')

    if (i%5 === 0) {
      output.push('Tempat Fitness Tutup')
    }
    else {
      for(let j = 0; j < members.length; j++) {
        if(counter % members[j].Often === 0) {
          output.push(members[j].name + ', ');
        }
      }
    }
    let result = output.join(" ");
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

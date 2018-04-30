
/*
Pseudocode
Set member = []
Set dayOpen = 7 (fitness open date)
Set tono = 2 (berapa hari sekali tono ke fitness)
Set anton = 4 (berapa hari sekali anton ke fitness)
Set budi = 5 (berapa hari sekali budi ke fitness)

Loop through i, i start from dayOpen until 31
	if (i-7) modular tono equals to 0, then push 'Tono' to member
	if (i-7) modular anton equals to 0, then push 'Budi' to member
	if (i-7) modular budi equals to 0, then push 'Anton' to member
	endif
	if i modular 5 equals to 0, then print 'tanggal [i]: tempat fitness tutup'
	else print 'tanggal [i]: [member]''
	endif
endfor
*/

function fitness(open, people) {
  member = [];
  for (var i = open; i <= 31; i++) {
    member = [];
    for (var j = 0; j < people.length; j++) {
    	if ((i - open) % people[j][1] === 0) {
      		member.push(people[j][0]);
    	}
    }
    if (i % 5 === 0) {
      console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
    } else {
      console.log('Tanggal ' + i + ': ' + member.join(', '));
    }
  }
}

fitness(7, [['Tono', 2], ['Anton', 4], ['Budi', 5]]);

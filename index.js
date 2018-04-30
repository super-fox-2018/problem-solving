function fitnessCenter(startDate, endDate, memberFitness) {
  for (let i = startDate; i <= endDate; i++) {
    var memberName = []
    if (i % 5 === 0) {
      memberName.push('Tempat Fitness Tutup')
    } else {
      for (let j = 0; j < memberFitness.length; j++) {
        if ((i - 7) % memberFitness[j].interval === 0) {
          memberName.push(memberFitness[j].name)
        }
      }
    }
    console.log(`Tanggal ${i} ${memberName}`);
  }
}

let member = [{
    name: 'Tono',
    interval: 2
  },
  {
    name: 'Anton',
    interval: 4
  },
  {
    name: 'Budi',
    interval: 5
  }
]
fitnessCenter(7, 31, member)

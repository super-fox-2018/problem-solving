'use strict'

function jadwalFitnes(date, libur, tonoSchedule, antonSchedule, budiSchedule) {

    var start = 7;
    var output = [];
    
    for(let i = start; i <= date; i++) {
        if(i == 7) {
            output.push('Tono');
            output.push('Anton');
            output.push('Budi');
        } else {
            if((i - start) % tonoSchedule == 0){
                output.push('Tono');
            }
            if((i - start) % antonSchedule == 0) {
                output.push('Anton');
            }
            if((i - start) % budiSchedule == 0) {
                output.push('Budi');
            }
            if(i % libur == 0) {
                output = 'Tempat Fitness Tutup';
            }
        }

        if(output.length == 1) {
            console.log('Tanggal ' + i + ': ' + output[0]);
        } else if(output.length == 2) {
            console.log('Tanggal ' + i + ': '+ output[0] + ', ' + output[1])
        } else if(output.length == 3) {
            console.log('Tanggal ' + i + ': ' + output[0] + ', '+ output[1] + ', ' + output[2])
        } else {
            console.log('Tanggal ' + i + ': ' + output);
        }
        output = [];
    }
    return '';
}

console.log(jadwalFitnes(31, 5, 2, 4, 5));
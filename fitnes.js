'use strict'

function jadwalFitnes(date, libur, tonoSchedule, antonSchedule, budiSchedule) {

    var start = 7;
    var output = [];
    
    for(let i = start; i <= date; i++) {
        if(i == start) {
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

/*
PSEUDOCODE

CREATE function jadwalFitnes and SET parameter to date, tonoSchedule, antonSchedule, budiSchedule

GET start to 7
GET output to []

LOOP from start until date and add 1 for each loop
    IF i equals to start
        ADD output to 'Tono'
        ADD output to 'Anton'
        ADD output to 'Budi'
    ELSE
        IF i - start % tonoSchedule equals to 0
            ADD output to 'Tono'
        END IF
        IF i - start % antonSchedule equals to 0
            ADD output to 'Anton'
        END IF
        IF i - start % budiSchedule equals to 0
            ADD output to 'Budi'
        END IF
    END IF
END LOOP

    IF output.length == 1
        PRINT 'Tanggal ' + i + ': ' + output[0]
    ELSE IF output.length == 2
        PRINT 'Tanggal ' + i + ': '+ output[0] + ', ' + output[1]
    ELSE IF output.length == 3
        PRINT 'Tanggal ' + i + ': ' + output[0] + ', '+ output[1] + ', ' + output[2]
    ELSE
        PRINT 'Tanggal ' + i + ': ' + output
    END IF

    SET output to []

*/

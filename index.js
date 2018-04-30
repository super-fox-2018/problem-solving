/*
PSEUDOCODE:
FUNCTION problemSolving with no parameter
    SET "person" to array with value [{name: 'Tono', masuk : 2}, {name: 'Anton', masuk: 4}, {name: 'Budi', masuk: 5}];
    SET "mulaiMasuk" to value '7'
    SET "Libur" to value '5'
    SET "numHari" to value '31'

    LOOPING with "i" = "mulaiMasuk"condition "mulaiMasuk" <= "numHari" 
            SET "arrMember" to empty ARRAY
            IF "i" MOD Libur equal to 0 THEN
                print 'Tanggal ' + i + ': Tempat Fitness Tutup'
            ELSE
                IF "i" equal to "mulaiMasuk" THEN
                    push "person.name" index [0] to "arrMember"
                    push "person.name" index [1] to "arrMember"
                    push "person.name" index [2] to "arrMember"
                    print 'Tanggal ' + i + ': ' + arrMember
                ELSE
                    IF "i - mulaiMasuk" MOD person index "0" === 0 THEN
                        push "person.name" index [0] to "arrMember"
                    END IF
                    IF "i - mulaiMasuk" MOD person index "1" === 0 THEN
                        push "person.name" index [1] to "arrMember"
                    END IF
                    IF "i - mulaiMasuk" MOD person index "2" === 0 THEN
                        push "person.name" index [2] to "arrMember"
                    END IF
                    PRINT 'Tanggal ' + i+ ': ' + arrMember;
                END IF
            END IF
            i++
    END LOOP
END FUNCTION
*/

function problemSolving(){
    let person = [{name: 'Tono', masuk : 2}, {name: 'Anton', masuk: 4}, {name: 'Budi', masuk: 5}];
    const mulaiMasuk = 7;
    const libur = 5;
    const numHari = 31
    for (var i = mulaiMasuk; i <= numHari; i++ ){
        arrMember = [];
        if (i%libur ===0){
            console.log('Tanggal ' + i + ': Tempat Fitness Tutup');
        }
        else {
            if (i === mulaiMasuk){
                arrMember.push(person[0].name);
                arrMember.push(person[1].name);
                arrMember.push(person[2].name);
                console.log ('Tanggal ' + i + ': ' + arrMember.join(', '));
            }else{
                if((i - mulaiMasuk)%person[0].masuk === 0){
                    arrMember.push(person[0].name);
                }
                if ((i - mulaiMasuk)%person[1].masuk === 0 ){
                    arrMember.push(person[1].name);
                }
                if ((i-mulaiMasuk)%person[2].masuk === 0){
                    arrMember.push(person[2].name);
                }
                console.log ('Tanggal ' + i+ ': ' + arrMember.join (', '));
            }
        }
    }
}

problemSolving();
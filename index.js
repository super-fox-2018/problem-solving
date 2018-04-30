/*
PSEUDOCODE
SET variabel input with 7
SET var T=A=B with value input
lakukan looping start dari date sampai tanggal 31 --> yang ada di fitnessSchedule
SET var array with array kosong
kemudian lakukan pengkondisian
IF i === input
    THEN DISPLAY Tanggal i: Tono, Anton, Budi
    ELSE
    IF i === T+2
        THEN DISPLAY Tanggal i: Tono
        T=i
    IF i === A+4
        THEN DISPLAY Tanggal i: Anton
        A=i
    IF i === B+5
        THEN DISPLAY Tanggal i: Budi
        B=i
    IF (i%5===0)
        THEN DISPLAY Tanggal:  i + Tempat Fitnes Tutup 
console.log (Tanggal i + array yang sudah di join)
*/

function fitnessSchedule(date){
    var A=B=T=date
    
    for (var i=date; i<=31; i++){
        var array=[]
        if (i===date){
            console.log("Tanggal: " + i + " " + "Tono, Anton, Budi")
        }

        else {
            // console.log("-------------", i, T, T+2)
            if (i===T+2){
                array.push("Tono")
                T=i
            }
            if (i===A+4){
                array.push("Anton")
                A=i
            }
            if (i===B+5){
                array.push("Budi")
                B=i
            }
            if (i%5===0){
                console.log("Tanggal: " + i + " " + "Tempat Fitness Tutup")
            }
          console.log("Tanggal: " + i + " "+ array.join(", "))
        }
    }
}
fitnessSchedule(7)
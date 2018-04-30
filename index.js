
function problem(players,start,end){
    // store tampung equal []
    // FOR STORE i equal start
    //     i <=end
    //     increment i
    // END FOR

    // STORE hasil2 equal []
    // STORE hasil equal []
    // FOR STORE i equal 0
    //     i < tampung length
    //     increment i
    //         hasil equal []
    //         push tampung [i] to hasil
    //             FOR STORE j equal 0
    //                 j< player length
    //                 increment j
    //                     IF i mod players[j][1] equal 0 THEN
    //                         DO push player[j][0] to hasil
    //                     END IF
    //                 push hasil to hasil2
    //             END FOR
    // END FOR
    
    // STORE final equal []
    // FOR STORE i equal 0
    //     i < hasil2 length
    //     increment i
    //         IF index of final(hasil2[i] equal -1) THEN
    //             DO push hasil2pi to final
    //         END IF
    // END FOR
    
    // FOR STORE i equal 0
    //     i <final length
    //     increment i
    //         STORE nama equal final[i] splice(1) join()
    //             IF final[i][0] mod 5 === 0 THEN 
    //             DISPLAY tanggal + final[i] + libur
    //             ELSE 
    //             DISPLAY tanggal + final[i][0] + nama
    //             END IF
    // END FOR            

var tampung=[]
for(let i=start;i<=end;i++){
    tampung.push(i)
}
var hasil2=[]
var hasil=[]
for(let i=0;i<tampung.length;i++){
    hasil=[]
    hasil.push(tampung[i])
    for(let j=0;j<players.length;j++){
        if(i % players[j][1] === 0){
    
            hasil.push(players[j][0])  
        }
        
        hasil2.push(hasil)
    }
    
}
var final=[]
for(let i=0;i<hasil2.length;i++){
    if(final.indexOf(hasil2[i])=== -1){
        final.push(hasil2[i])
    }
}

for(let i=0;i<final.length;i++){
var nama=final[i].splice(1).join(',')
if(final[i][0] % 5  === 0){
    console.log('tanggal ' + final[i] +': libur')
}else{
console.log('tanggal ' + final[i][0] + ': ' + nama)}
}
}
problem([['tono' ,2],['anton' ,4],['budi' ,5]],7,31)


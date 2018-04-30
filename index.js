problemSolving = (Start,array)=>{
    let Startcompare = Start
    while(Start<=31){
        var Str = `Tanggal ${Start} : `
        var theArray = []
        for(i=0;i<array.length;i++){
            if((Start-Startcompare)%array[i][1]==0){
                theArray.push(array[i][0])
            }
        }
        Str = Start%5==0? "Tanggal " + Start + " : Tempat Fitness Tutup" : Str
        console.log(Str+theArray.join(", "))
        Start++
    }
}

problemSolving(7,[['Tono',2],['Budi',4],['Anton',5],['Joni',5]])
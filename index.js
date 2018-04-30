/*


*/


function jadwal(member,jadwal,tutup,buka) {
	var count=-1;
	for(var i=buka;i<=31;i++) {
		var name="";
		count++
		if(i%tutup === 0) {
			console.log("Tanggal "+i+" :"+"Tempat Fitness Tutup")
		}
		else{
			for(var j=0;j<member.length;j++) {
				if(count==0) {
					name+=member[j]+","
				}else {
					if(count%jadwal[j] == 0) {
						name+=member[j]+","
					}
				}
			}
			
		console.log("Tanggal "+i+" :"+name.slice(0,name.length-1))	
		}
	}

}




jadwal(["Tono","Anton","Budi"],[2,4,5],5,7)
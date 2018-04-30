function hariPembukaan(mulai,visitInterval,name,selesai,tutup){
	var obj = {}
	for(var i=mulai;i<=selesai;i++){
		obj['tanggal '+i+':']=[]
		if (i%5===0) {
			obj['tanggal '+i+':'].push('Tempat fitness tutup')

		}
		else{
			var tampung = []
			for(var j=0;j<visitInterval.length;j++){
				if ((i-mulai)%visitInterval[j]===0) {
					//console.log('tanggal',i,name[j]);
					obj['tanggal '+i+':'].push(name[j])
				}
			}
		}
	} 
	for(key in obj){
		console.log(key+' '+obj[key].join(','));
	}
	//return obj
}
console.log(hariPembukaan(7,[2,4,5],['Tono','Anton','Budi'],31,5));
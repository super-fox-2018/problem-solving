/* Pseudocode

FUNCTION kalenderFitness with input name, when person come, holiday, and open date

STORE nameGroup as empty arr

Loop date from 0 to 31 
PUSH empty arr to nameGroup

Loop date from 0 to 31
IF date can be divided without decimals by holiday
    PUSH 'Tempat fitness tutup' to nameGroup 

    LOOP number of people participating
        IF date - openDate can be divided without decimals by fitLoop and 
        cannot be divided by holiday without decimals
            PUSH name of that people to nameGroup

Loop date from openDate to 31

    PRINT Tanggal 'date': 'nameGroup in that date'

*/

function kalenderFitness(name, fitLoop, holiday, openDate) {

    let nameGroup = []

    for(x=0; x<=31; x++) {
        
        nameGroup.push([])
    }
    
    for(a=0; a<=31; a++) {
        
        if(a%holiday===0) {
            nameGroup[a].push('Tempat Fitness Tutup')
        }
        
        for(b=0; b<fitLoop.length; b++) {

            if((a-openDate)%fitLoop[b]===0 && a%holiday!==0) {
               nameGroup[a].push(name[b])
            }

        }
        
    }

    for(i=openDate; i<=31; i++) {
        
        var result

        result = 'Tanggal '+i+': '+nameGroup[i].join(", ")

        console.log(result)
    }
    
}

(kalenderFitness(['Tono', 'Anton', 'Budi'], [2, 4, 5], 5, 7))
/* PSEUDOCODE
CREATE function called problemSolving that accepts "startDate", "arr", "arrTimes", "closing"
  CREATE var count = 0
  CREATE day = ""
  CREATE a FOR loop with i = startDate, i <= 31
    day = "Tanggal " + i + ": " //as a blank template
    IF(i === startDate)
      THEN, CREATE NESTED LOOP k = 0, k < arr.length
        ADD arr[k] to day (day += arr[k])
        IF k < arr.length - 1,
          THEN ADD ", " to day (day += ", ")
        ELSE, day += " "
        END IF
        END FOR
      PRINT day
    ELSE
      IF i % closing[1]] === 0
        THEN day += closing[0]
        PRINT day
      ELSE
        CREATE empty array 'members'
        CREATE a FOR LOOP with var j = 0, j < arr.length
          IF count % arrTimes[j] === 0
            THEN members.push(arr[j]);
          END IF
        END LOOP
        JOIN members with ,
        ADD members to day (day += members)
        PRINT day
      END IF
    END IF

    count++
  END LOOP
RETURN ""

*/


function problemSolving(startDate, arr, arrTimes, closing){
  var count = 0;
  var day = "";

  for(var i = startDate; i <= 31; i++){
    day = "Tanggal " + i + ": "
    if(i === startDate){
      for(var k = 0; k < arr.length; k++){
        day += arr[k];
        if(k < arr.length - 1){
        day += ", ";}
        else{
          day += " ";
        }
      }
      console.log(day);
    }
    else{
      if (i % closing[1] === 0){
        day += closing[0];
        console.log(day);
      }
      else{
        let members = [];
        for( var j = 0; j < arr.length ; j++){
          if(count % arrTimes[j] === 0){
            members.push(arr[j]);
          }
        }

        members = members.join(", ");
        day += members;
        console.log(day);

      }
    }
   count++;
}
 return "";
}

console.log(problemSolving(7,["Tono", "Anton", "Budi"],[2,4,5,], ["Tempat Fitness Tutup", 5]));

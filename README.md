# problem-solving

FUNCTION problemSolving WITH PARAMETER Start,ArrayofArrays

	SET StartComparison = Start

	WHILE Start<=31

		SET String = "Tanggal : " + Start

		SET ArrayforJoin = []

		FOR i = 0 - LENGTH OF ArrayofArrays

			IF (Start - StartComparison) % ArrayofArrays[i][1] == 0
				PUSH ArrayforJoin WITH ArrayofArrays[i][0]
			END IF

		END FOR

		IF Start%5==0
			String = ""
		END IF

		PRINT String + ArrayforJoin
		Start++

	END WHILE

END FUNCTION
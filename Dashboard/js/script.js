var NodesFactory_Namespaces = { 


	GenerateTable: function (objectData, arrayDates) { 


		if (document.getElementsByTagName("table").length == 0) { 

			var table = document.createElement("table");
			table.setAttribute("border", "1");
			table.style.borderCollapse = "collapse";
			table.style.width = "60%";
			table.style.border = "2px solid black";

			var headerLooper;
			var tableHeader;

			for (headerLooper = 0; headerLooper <= arrayDates.length; headerLooper++) { 

				tableHeader = document.createElement("th");

				if (headerLooper == 0) { 
					tableHeader.innerHTML = "";
				} 
				else { 
				tableHeader.innerHTML = arrayDates[headerLooper - 1];
				} 

				table.appendChild(tableHeader);
				
			} 

			var rowInTable;
			var columnInTable;
			var datesLooper;
			var tableRow;
			var tableData;
			var key;
			var tableImage;
			var score;
			var person;
			var lastScore;
			var lastName;

			for (rowInTable = 0; rowInTable < Object.keys(objectData).length; rowInTable++) { 

				tableRow = document.createElement("tr");
				person = Object.keys(objectData)[rowInTable];

				for (columnInTable = 0; columnInTable < arrayDates.length + 1; columnInTable++) { 

					tableData = document.createElement("td");
					tableData.style.borderWidth = "1.2px";
					tableData.style.border = "2px solid black";
					tableData.style.borderWidth = "1px 1px";

					if (columnInTable == 0) { 
						tableData.style.background = "#eaeaea";
						tableData.innerHTML = Object.keys(objectData)[rowInTable];
						tableData.style.fontWeight = "bold";
					} 
					else { 

						for (datesLooper = 0; datesLooper < objectData[person].length; datesLooper++) { 
				
							if (objectData[person][datesLooper][0] == arrayDates[columnInTable - 1]) { 

								score = objectData[person][datesLooper][1];
								tableData.innerHTML = score + " %";

								tableImage = document.createElement("img");
								tableImage.alt = "Rate image";
								tableImage.width = 48;
								tableImage.height = 48;

								if (person == lastName) { 
									if (score > lastScore) { 
										tableImage.src = "image/up.png";
									} 
									else if (score < lastScore) { 
										tableImage.src = "image/down.png";
									} 
									else if (score == lastScore) { 
										tableImage.src = "image/no.png";
									} 
								} 
								else { 
									tableImage.src = "image/no.png";
								} 

								lastScore = score;
								lastName = person;

								tableData.appendChild(tableImage);
							} 

						} 
						
					} 

					tableRow.appendChild(tableData);
				}; 

			table.appendChild(tableRow);
			} 

			document.body.appendChild(table);
		} 

	} 

} 


/*-------------------------------------------------------------------------------------------------------------------*/


var Logic_Namespaces = { 


	GetJsonResultColumns: function(jsonFile) { 

		var dataLooper;
		var dataLength = jsonFile.data.length;

		var objectData = {};
		var keyForRecord;
		var dateForRecord;
		var rateForRecord;
		var arrayDates = [];
		var arrayLooper;
		var arrayLooper2;

		for (dataLooper = 0; dataLooper < dataLength; dataLooper++) { 

			keyForRecord = jsonFile.data[dataLooper].name;
			dateForRecord = jsonFile.data[dataLooper].date;
			rateForRecord = jsonFile.data[dataLooper].rate;

			if (objectData[keyForRecord] == undefined) { //first creation
				objectData[keyForRecord] =  new Array ([ dateForRecord, rateForRecord ]);
			} 
			else { //adding data
				objectData[keyForRecord].push([dateForRecord, rateForRecord]);
			} 

			arrayDates.push(dateForRecord);		
		} 


		for (arrayLooper = 0; arrayLooper < arrayDates.length - 1; arrayLooper++) {  //check unique and -1, cuz not include last element
			for (arrayLooper2 = 1; arrayLooper2 <= arrayDates.length; arrayLooper2++) { 
				if (arrayLooper != arrayLooper2) { 
					if (arrayDates[arrayLooper] == arrayDates[arrayLooper2]) {	// if first element = second
						arrayDates.splice(arrayLooper2, 1); //remove 2nd element
						/*start--; //looper back to check first and 3nd*/

					} 
				} 
			} 
		} 

		arrayDates.sort();

		NodesFactory_Namespaces.GenerateTable(objectData, arrayDates);
	} 

} 
	
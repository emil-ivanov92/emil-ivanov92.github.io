var DOM_Namespaces = { 
	

	GenerateStarter: function (idStarterDiv) { 

		var starterArea = document.getElementById(idStarterDiv);
		var starterParagraph = document.createElement("p");
		starterParagraph.id = "para_start";
		starterParagraph.innerHTML = "Please enter 2 numbers separated by dash (e.g. 1-5) and check the dropdown";
		starterArea.appendChild(starterParagraph);

		var starterInput = document.createElement("input");
		starterInput.setAttribute("type", "text");
		starterInput.id = "textInput";
		starterArea.appendChild(starterInput);

		starterButton = document.createElement("BUTTON");
	    starterButton.innerHTML = "Submit";
	    starterButton.onclick = DOM_Namespaces.GetInput;
	    starterArea.appendChild(starterButton);

	    var starterSelect = document.createElement("select");
	    starterSelect.id = "dropDown";
	    starterSelect.onchange = DOM_Namespaces.GenerateTextArea;
	    starterArea.appendChild(starterSelect);

	   	var starterDivForTextArea = document.createElement("div");
	    starterDivForTextArea.id = "text_area_view";
	    starterArea.appendChild(starterDivForTextArea);

	    var starterDivForTable = document.createElement("div");
	    starterDivForTable.id = "div_table";
	    starterArea.appendChild(starterDivForTable);

	},


	GetInput: function () { 

		var inputValue = document.getElementById("textInput").value;
		Logic_Namespaces.ValidationInput(inputValue);
		
	}, 


	GenerateDropDown: function (arrayDropDownValues) { 

		var idDropDown = document.getElementById("dropDown");
		idDropDown.innerHTML = "";
		var starterLoop;
		var option;

		for (starterLoop = 0; starterLoop < arrayDropDownValues.length; starterLoop++) { 
			option = document.createElement("option");
			option.text = arrayDropDownValues[starterLoop];
			idDropDown.add(option);
		} 

		idDropDown.selectedIndex = -1; //drop down nothing select by default

		document.getElementById("text_area_view").innerHTML = "";
		document.getElementById("div_table").innerHTML = ""; //clear the div content
		
	},


	GenerateTextArea: function () { 
		
		document.getElementById("div_table").innerHTML = "";
		document.getElementById("text_area_view").innerHTML = "";

		var idDropDown = document.getElementById("dropDown");
		var selectedValue = idDropDown.options[idDropDown.selectedIndex].value;
		var newButton;

		if (document.body.contains(document.getElementsByTagName("button")[1]) == false) { //check if exist 
		    newButton = document.createElement("BUTTON");
		    newButton.innerHTML = "Create Table";
		    newButton.onclick = DOM_Namespaces.GenerateDivContent;
		    document.getElementById("text_area_view").appendChild(newButton);
		} 

		var starterLoop;
		var idTextArea;
		for (starterLoop = 1; starterLoop <= selectedValue; starterLoop++) { 
			idTextArea = document.createElement("textarea");
		    document.getElementById("text_area_view").appendChild(idTextArea);
		} 

	}, 


	GenerateDivContent: function () { 

		var textArea = document.getElementsByTagName("textarea");
		var numberOfTextArea = textArea.length;
		document.getElementById("div_table").innerHTML = ""; //clear the div content

		var table = document.createElement("table");
		table.setAttribute("border", "1");
		table.style.borderCollapse = "collapse";
		table.style.width = "90%";
		table.style.margin = "3%";
		var tableRow;
		var tableData;
		var row;
		var column;

		for (row = 1; row <= 2; row++) { 
				tableRow = document.createElement("tr");
				if (row == 2) { 
					tableRow.id = "id_row";
				} 

			for (column = 1; column <= numberOfTextArea; column++) { 

				if (row == 1) { 
					tableData = document.createElement("td");
					tableData.innerHTML = "Text Area " + column;
					tableData.style.fontWeight = "bold";
					tableData.style.textAlign = "center";
				} 
				else { 
					tableData = document.createElement("td");
				} 

				tableRow.appendChild(tableData);
				
			}; 

			table.appendChild(tableRow);
		} 
		document.getElementById("div_table").appendChild(table);

		DOM_Namespaces.CreateTable();
	},


	FillTable: function (arrayTables, indexOfTextArea) { 

		var textArea = document.getElementsByTagName("textarea");
		var numberOfTextArea = textArea.length;
		var tdElements = document.getElementById("id_row");

		tdElements.children[indexOfTextArea].appendChild(arrayTables[0]); // add small tables on big div table

	}, 


	CreateTable: function () { 
		
		var textArea = document.getElementsByTagName("textarea");;
		var textAreaValue;
		var indexOfTextArea;
		var numberOfTextArea = textArea.length;
		
		for (indexOfTextArea = 0; indexOfTextArea < numberOfTextArea; indexOfTextArea++) { 

			textAreaValue = textArea[indexOfTextArea].value;
			Logic_Namespaces.RepatedWords(textAreaValue, indexOfTextArea); //textAreaValue is the text of textArea elements

		} 
	}, 


	DrawTable: function (arrayRepatedWords, indexOfTextArea) { 
		
		var table = document.createElement("table");
		table.setAttribute("border", "1");
		table.style.borderCollapse = "collapse";
		table.style.width = "90%";
		table.style.margin = "3%";

		if (arrayRepatedWords[0] == "") { 

			var tableRow = document.createElement("tr");
			var tableData = document.createElement("td");
			tableData.innerHTML = "No data to display";
			tableData.style.textAlign = "center";

			tableRow.appendChild(tableData);
			table.appendChild(tableRow);

		} 
		else { 
			var tableHeader1 = document.createElement("th");
			var tableHeader2 = document.createElement("th");
			tableHeader1.innerHTML = "Word";
			tableHeader2.innerHTML = "Count";
			table.appendChild(tableHeader1);
			table.appendChild(tableHeader2);

			var indexToFill = 0;
			var row;
			var column;
			var tableRow;
			var tableData;

			for (row = 1; row <= arrayRepatedWords.length / 2; row++) { 
				tableRow = document.createElement("tr");

				for (column = 1; column <= 2; column++) { 
					tableData = document.createElement("td");
					tableData.innerHTML = arrayRepatedWords[indexToFill].toString();
					indexToFill++;
					tableRow.appendChild(tableData);
				}; 

				table.appendChild(tableRow); 
			} 
		} 

	var arrayTables = [];
	arrayTables.push(table);

	DOM_Namespaces.FillTable(arrayTables, indexOfTextArea);

	} 


} 


/*-------------------------------------------------------------------------------------------------------------------*/


var Logic_Namespaces = {


	ValidationInput: function (inputValue) { 

		var hyptens = inputValue.indexOf("-");
		var leftNumber = inputValue.substring(0, hyptens);
		var rightNumber = inputValue.substring(hyptens + 1);

		if ( (hyptens == -1) || (isNaN(Number(leftNumber)) == true) || (isNaN(Number(rightNumber)) == true) || (leftNumber <= 0) || (rightNumber <= 0) ) { 
			alert("Wrong Values");
			document.getElementById("dropDown").innerHTML = "";
			document.getElementById("text_area_view").innerHTML = "";
			document.getElementById("div_table").innerHTML = "";
		} 
		else { 
			Logic_Namespaces.GenerateValueDropDown(leftNumber, rightNumber);
		} 

	}, 


	GenerateValueDropDown: function (leftNumber, rightNumber) { 

		var starterLoop;
		var arrayDropDownValues = [];

		if (leftNumber == rightNumber) { 
			arrayDropDownValues.push(Number(leftNumber));
		} 
		else if (leftNumber - rightNumber > rightNumber - leftNumber) { 
			for (starterLoop = Number(leftNumber); starterLoop >= rightNumber; starterLoop--) { 
				arrayDropDownValues.push(starterLoop);
			} 
		} 

		else { 
			for (starterLoop = Number(leftNumber); starterLoop <= rightNumber; starterLoop++) { 
				arrayDropDownValues.push(starterLoop);
			} 
		}

		DOM_Namespaces.GenerateDropDown(arrayDropDownValues);
	}, 

	RepatedWords: function (textAreaValue, indexOfTextArea) { 

		textAreaValue = textAreaValue.replace(/\s{2,}/g, " "); //replace 2 or more spaces with 1 spaces - need, cuz split by space
		textAreaValue = textAreaValue.trim(textAreaValue);
		textAreaValue = textAreaValue.toLowerCase();
		var arrayRepatedWords = [];
		var stringArray = textAreaValue.split(" ");
		stringArray.sort();
		var counter = 1;
		var starterLoop;

		for (starterLoop = 0; starterLoop < stringArray.length; starterLoop++) { 

			if (stringArray[starterLoop] == stringArray[starterLoop + 1]) { 
				counter++;
			} 
			else { 
				arrayRepatedWords.push(stringArray[starterLoop], counter)
				counter = 1;
			} 

		} 

		DOM_Namespaces.DrawTable(arrayRepatedWords, indexOfTextArea);
		arrayRepatedWords = [];
		
	} 


} 

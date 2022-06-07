var Chart_Namespaces = { 


	GenerateChart: function (arrayLanguages, arrayValues2D) { 


		var xmlBegin = `<chart>
				<base depth="6" depthColorLeft="F3F3F3" depthColorRight="F3F3F3"  caption="Skills" bgAlpha="100" baseFontSize="15" baseFont="Tahoma" baseFontColor="656565"  bgColor="F3F3F3,FFFFFF"  barsGradientOpacity="30" barsHoverColor="default" chartRightMargin="8" bgAngle="225" showValues="1" chartTopMargin="10" showAlternateHGridColor="1" AlternateHGridAlpha="100" AlternateHGridColor="CCCCCC"  divLineColor="999999" yAxisMinValue="0" yAxisMaxValue="100" chartBottomMargin="0" numDivLines="4" chartLeftMargin="10" legendBorderWidth="0" legendBorderColor="999999" legendBackgroundColor="EAEAEA" showLegend="1" ></base>
				<bars barsGradientAngle="90" barsMaxHeightCoef="0.6" barsSpacing="15"  isColumn="1" stacked="0" ></bars>
				<canvas canvasBgColor="FFFFFF,F3F3F3" canvasBgAlpha="90" canvasPadding="20" canvasBgAngle="225" outCnvBaseFont="Tahoma"  outCnvBaseFontColor="757575" outCnvBaseFontSize="15" ></canvas>
				<categories>`;

		var xmlCategory = "";
		var yearValue;
		var xmlValues = "";
		var languagesLooper;
		var yearsLooper;
		var colors = ["15efe8","09ed09","f75a11"];
		var years = Object.keys(jsonFile.data[0]);
		years.pop();

		var yearNumber = years.length;

		for (yearsLooper = 0; yearsLooper < yearNumber; yearsLooper++) { 

			yearValue = '<data seriesName="' + years[yearsLooper] + '" showValues="1" positionAtTop="0" color="' + colors[yearsLooper] + '15efe8">';
			xmlCategory = "";

			for (languagesLooper = 0; languagesLooper < arrayLanguages.length; languagesLooper++) { 

				xmlCategory += "<category label='" + arrayLanguages[languagesLooper] + "'></category>";
				yearValue += "<set value='" + arrayValues2D[languagesLooper][yearsLooper] + "' ></set>";
			} 

			yearValue += "</data>";
			xmlValues += yearValue;
			yearValue = "";
		} 

		var xmlMiddle = "</categories>";
		var xmlEnd = 
				`<styles>
					<definition>
						<style name='myCaptionFont' type='font' font='Tahoma' size='17' color='2d2d2d' bold='1' ></style>
					</definition>
					<application>
						<apply toObject='Caption' styles='myCaptionFont' ></apply>
					</application>
				</styles>
			</chart>`;

		var xmlFinal = xmlBegin + xmlCategory + xmlMiddle + xmlValues + xmlEnd;

		var xmlChart = new BarChartXML (document.getElementById("container"), xmlFinal);
		xmlChart.initialize ("100%", "100%");

	} 


} 


/* ----------------------------------------------------------------------------------------------------------------------------------- */


var Logic_Namespaces = { 


	GetContent: function () { 

		var arrayLanguages = [];
		var arrayValues = [];
		var arrayValues2D = [];
		var valuesLooper;
		var languagesNumber = jsonFile.data.length;
		var yearNumber = (Object.keys(jsonFile.data[0]).length) - 1;
		var value;
		var objectValues;

		for (valuesLooper = 0; valuesLooper < languagesNumber; valuesLooper++) { 
			objectValues = jsonFile.data[valuesLooper];

			for (value in objectValues) { 

				if (value == "Skills") { 
					arrayLanguages.push(objectValues[value]);
				} 
				else { 
					arrayValues.push(objectValues[value]);
				} 
			} 
		
		} 

		while (arrayValues.length) { 
			arrayValues2D.push(arrayValues.splice(0, yearNumber));
		} 

		Chart_Namespaces.GenerateChart(arrayLanguages, arrayValues2D);
	} 


} 
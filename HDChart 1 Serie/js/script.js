var Chart_Namespaces = { 


	GenerateChart: function (arraySkills, arrayValues) { 


		var xmlBegin = `
			<chart>
			<base depth='6' caption="Skills" bgColor='ffffff,e6e6e6' bgAngle='225' showValues='0' chartTopMargin='10' chartRightMargin='8' chartBottomMargin='0' chartLeftMargin='10' ></base>
			<bars isColumn='0' barsGradientOpacity='60' barsHoverColor='default' barsSpacing='15' barsGradientAngle='90' barsMaxHeightCoef='0.13' ></bars>
			<canvas canvasPadding='20' canvasBgColor='e6e6e6,ffffff' canvasBgAlpha='100' canvasBgAngle='225' outCnvBaseFont='Segoe UI,Tahoma,Verdana' outCnvBaseFontSize='12' ></canvas>
			<divlines numDivLines='4' showAlternateHGridColor='1' AlternateHGridAlpha='100' AlternateHGridColor='CCCCCC' divLineColor='999999' ></divlines>
			<headings rotateCategoryNames='1' ></headings>
			<legend showLegend='0' ></legend>
			<scales yAxisMaxValue='100' yAxisMinValue='0'></scales>
			<categories>`;

		var xmlCategory = "";
		var xmlValues = "";
		var starterLoop;
		var randomColor;

		for (starterLoop = 0; starterLoop < arraySkills.length; starterLoop++) { 

			xmlColor = Math.floor(Math.random()*10) + "" + Math.floor(Math.random()*10) + "" +Math.floor(Math.random()*10) + "D6F";
			xmlCategory += "<category label='" + arraySkills[starterLoop] + "'></category>";
			xmlValues += "<set value='" + arrayValues[starterLoop] + "' color='" + xmlColor + "' toolText='" + arrayValues[starterLoop] + "' ></set>";

		} 

		var xmlMiddle = "</categories> <data color='AFD8F8'>";
		var xmlEnd = "</chart>";
		var xmlFinal = xmlBegin + xmlCategory + xmlMiddle + xmlValues + xmlEnd;

		var xmlChart = new BarChartXML ( document.getElementById ( 'container' ), xmlFinal );
		xmlChart.initialize ( '100%' , '100%' );

	} 


} 


/* ----------------------------------------------------------------------------------------------------------------------------------- */


var Logic_Namespaces = { 


	GetContent: function () { 

		var arraySkills = [];
		var arrayValues = [];
		var starterLoop;

		for (starterLoop = 0; starterLoop < jsonFile.data.length; starterLoop++) { 

			arraySkills.push(jsonFile.data[starterLoop].Skills);
			arrayValues.push(jsonFile.data[starterLoop].Y2016);

		} 

		Chart_Namespaces.GenerateChart(arraySkills, arrayValues);
	} 


} 
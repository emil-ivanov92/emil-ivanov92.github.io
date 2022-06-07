var Poll_Namespaces = Poll_Namespaces || {};


Poll_Namespaces.getVote = function(int) { 


  if (window.XMLHttpRequest) { 
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } 
  else { // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  } 
  xmlhttp.onreadystatechange = function() { 
    if (this.readyState == 4 && this.status == 200) { 
      document.getElementById("poll").innerHTML = this.responseText;
      Poll_Namespaces.renderChart();
    } 
  } 
  xmlhttp.open("GET", "php/poll_vote.php?vote=" + int, true);
  xmlhttp.send();

} 


/* ------------------------------------------------------------------------------------------------------------------------------ */


Poll_Namespaces.renderChart = function() { 


  document.getElementById("pie_chart").style.display = "block";
  document.getElementById("pie_chart2").style.display = "block";

  var yesValue = document.getElementsByTagName("img")[0].width;
  var noValue = document.getElementsByTagName("img")[1].width;


  Ext.onReady(function() { 

     Ext.create('Ext.panel.Panel', { 
        renderTo: 'pie_chart2',
        title: "Result",
        collapsible: true,
        closable: true,
        autoWidth: true,
        height: 320,
        html: "<div id='container' style='width: 100%; height: 100%; border: 0px solid #dadada;'></div>"
     }); 

    Ext.create('Ext.chart.PolarChart', { 
      renderTo: 'pie_chart',
      title: "Result",
      collapsible: true,
      closable: true,
      autoWidth: true,
      background: "#eff3f9",
      height: 320,
      store: {
        fields: ['name', 'g1'],
        data: [{
            "name": "Yes" + ": " + yesValue + "%",
            "g1": yesValue
          },
          {
            "name": "No" + ": " + noValue + "%",
            "g1": noValue
          }
        ]
      },
      //configure the legend.
      legend: {
        docked: 'bottom'
      },
      //describe the actual pie series.
      series: [{
        type: 'pie',
        xField: 'g1',
        label: {
          field: 'name'
        },
        donut: 25 // increase or decrease for increasing or decreasing donut area in middle.
      }]
    });
  });

  Poll_Namespaces.renderHDChart(yesValue, noValue);

} 


/* ------------------------------------------------------------------------------------------------------------------------------ */


Poll_Namespaces.renderHDChart = function(yesValue, noValue) { 


    var xmlBegin =
    `<chart>
      <base chartShadow="1" baseFont="Tahoma" baseFontColor="2d2d2d" baseFontSize="13" overlay="0.88" innerRadius="0.30" bgColor="FFFFFF,AAAAAA" bgAngle="45" bgAlpha="100" borderColor="default" borderWidth="1" ></base>
      <headings caption="Result" ></headings>
      <numeral numberPrefix=""  numberSuffix="%" decimals="" ></numeral>
      <tooltip toolTipBgColor="ffffdd" toolTipBorderColor="000000" toolTipBorderWidth="1" toolTipFontFamily="Tahoma, Arial" toolTipFontSize="12" toolTipFontColor="333333"></tooltip>
      <legend legend="1"  legendBgAngle="45" legendBorderWidth="1"  legendBorderColor="999999" legendBackground="FFFFFF,EAEAEA" legendWidth="200" legendPosition="right"></legend>
      <set label="Yes" color="34f965" value=`;

      var xmlValues = '"' + yesValue + '" ></set><set label="No" color="f72c47" value="' + noValue + '"';
      
      var xmlEnd = 
        ` ></set>
        <styles>
          <definition>
            <style name="myCaptionFont" type="font" font="Tahoma" size="15" color="2d2d2d" bold="1" ></style>
          </definition>
          <application>
            <apply toObject="Caption" styles="myCaptionFont" ></apply>
          </application>
        </styles>
      </chart>`;

    var xmlFinal = xmlBegin + xmlValues + xmlEnd;
    var xmlChart = new PieChartXML (document.getElementById('container'), xmlFinal );
    xmlChart.initialize ('100%', '100%');

    Poll_Namespaces.jQueryFunction();

} 


/* ------------------------------------------------------------------------------------------------------------------------------ */


Poll_Namespaces.jQueryFunction = function() { 


    $(document).ready(function() { 

      $("#pie_chart").draggable({ 
        containment: "window"
      }); 

      $("#pie_chart2").draggable({ 
        containment: "window"
      }); 

      $("#poll").draggable({ 
        containment: "window"
      }); 

    }); 

} 

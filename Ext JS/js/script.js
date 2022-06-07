var GetData_Namespaces = { 


	GetCountryCodes: function () { 


		var recordsNumber;
		var starterLoop;
		var arrayCodes = [];
		var arrayLooper;
		var arrayLooper2; //using to compare for unique
		var codesLooper;
		var arrayObject;


		recordsNumber = jsonFile.data.length;
		for (starterLoop = 0; starterLoop < recordsNumber; starterLoop++) { 
			arrayCodes[starterLoop] = jsonFile.data[starterLoop].Country;
		} 


		arrayCodes.sort();

		for (arrayLooper = 0; arrayLooper < arrayCodes.length - 1; arrayLooper++) { //check unique and -1, cuz not include last element
			for (arrayLooper2 = 1; arrayLooper2 <= arrayCodes.length; arrayLooper2++) { 
				if (arrayLooper != arrayLooper2) { 
					if (arrayCodes[arrayLooper] == arrayCodes[arrayLooper2]) { // if first element = second
						arrayCodes.splice(arrayLooper2, 1); //remove 2nd element
						arrayLooper2--; //looper back to check first and 3nd

					} 
				} 
			} 
		} 



		arrayObject = [{ 
			Name: arrayCodes[0]
		}];

		for (codesLooper = 1; codesLooper < arrayCodes.length; codesLooper++) { //get Codes for store
			arrayObject.push({ 
				Name: arrayCodes[codesLooper]
			});
		} 
		ExtJS_DisplayData_Namespaces.DisplayCodes(arrayObject, recordsNumber);
	} 

} 


/*------------------------------------------------------------------------------------------------------*/


var ExtJS_DisplayData_Namespaces = { 


	DisplayCodes: function (arrayObject, recordsNumber) { 
		

		Ext.onReady(function() { 

			var selectedValue;
			var dataForSelectedValue = [];
			var myData;
			var codesStore;
			var starterLoop2;
			var gridStore;


			// Creation of data model
			Ext.define('StudentDataModel', { 
				extend: 'Ext.data.Model',
				fields: [
					{ 
						Country: 'Country',
						mapping: 'Country'
					},
					{ 
						RegionShort: 'RegionShort',
						mapping: 'RegionShort'
					}, 
					{ 
						Region: 'Region',
						mapping: 'Region'
					} 
				] 
			}); 


			codesStore = Ext.create('Ext.data.Store', { 
				fields: ['Code'],
				data: arrayObject
			}); 

			Ext.create('Ext.panel.Panel', { 
				renderTo: Ext.getBody(),
				height: 400,
				margin: 10,
				autoWidth: true,
				layout: 'border',
				align: 'center',
				defaults: { 
					collapsible: true,
					split: true,
					bodyStyle: 'padding:15px'
				}, 
				items: [{ 
					title: 'Combobox',
					region: 'west',
					items: [{ 
						xtype: 'combobox',
						fieldLabel: 'Select code',
						displayField: 'Name',
						queryMode: 'local',
						store: codesStore,
						listeners: {
							change: function() { 
								selectedValue = this.getValue();
								document.getElementById("gridDiv").innerHTML = "";
								dataForSelectedValue = [];
							

								for (starterLoop2 = 0; starterLoop2 < recordsNumber; starterLoop2++) { 
									if (selectedValue == jsonFile.data[starterLoop2].Country) { 
										dataForSelectedValue.push(jsonFile.data[starterLoop2]);
									} 
								} 


								myData = dataForSelectedValue;

								gridStore = Ext.create('Ext.data.Store', { 
									model: 'StudentDataModel',
									data: myData
								}); 
								// Creation of first grid
								Ext.create('Ext.grid.Panel', { 
									/* id                : 'gridId',*/
									store: gridStore,
									title: 'Country Data', // Title for the grid
									renderTo: 'gridDiv', // Div id where the grid has to be rendered
									/*width             : 600,*/
									autoWidth: true,
									columnLines: true,
									rowLines: true,
									stripeRows: true,
									hideHeaders: false,
									collapsible: true, // property to collapse grid
									enableColumnMove: true, // property which alllows column to move to different position by dragging that column.
									enableColumnResize: true, // property which allows to resize column run time.
									columns: [
											{ 
											header: "Country",
											dataIndex: 'Country',
											align: "center",
											flex: .3,
											sortable: true,
											hideable: false // this column will not be available to be hidden.
										}, { 
											header: "RegionShort",
											dataIndex: 'RegionShort',
											align: "center",
											flex: .3,
											sortable: true,
											hideable: false // this column will not be available to be hidden.
										}, { 
											header: "Region",
											dataIndex: 'Region',
											align: "center",
											flex: 0.9,
											sortable: true,
											hideable: false // this column will not be available to be hidden.
										} 

									] 
								}); 
							} 
						} 
						
					}], 

				}, { 
					title: 'Grid',
					region: 'center',
					align: 'center',
					autoScroll: true,
					html: ' <div id = "gridDiv"></div>'

				}] 

			}); 

		}); 

	} 

} 

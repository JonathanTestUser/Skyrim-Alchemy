
//want the database in the global scope to be accessable from other functions.
var database=[]; 

//The Herb object with all variables.					
function Herb(name, effect1, val1, mag1, effect2, val2, mag2, effect3, val3, mag3, effect4, val4, mag4){
	this.name = name;
	this.effect1 = effect1;
	this.val1 = val1;
	this.mag1 = mag1;
	this.effect2 = effect2;
	this.val2 = val2;
	this.mag2 = mag2;	
	this.effect3 = effect3;
	this.val3 = val3;
	this.mag3 = mag3;
	this.effect4 = effect4;
	this.val4 = val4;
	this.mag4 = mag4;
}

//The window on load function, automatically run, will compile a database from text.
window.onload = function(){

	//The source file to load
	var file = 'data.csv';
	
	//make a new XMLHttpRequest
    var rawFile = new XMLHttpRequest();
	
	//Set response type.
	rawFile.responseType = 'text';
	
	//GET the file data
    rawFile.open('GET', file, true);
	
	//wait until ready
    rawFile.onreadystatechange = function ()
    {
		//All Done!
		if(rawFile.readyState === rawFile.DONE && (rawFile.status === 200 || rawFile.status == 0))
		{
			//Store response to raw Data.
			var rawData = rawFile.responseText;
			
			//Split file into array by linebreaks, removing whitespace
			rawData= rawData.trim;
			var rawDataString = rawData.toString();
			var firstSplit = rawDataString.split("\n");
			
			//Get length of array
			var max = firstSplit.length;
			
			//Loop through the array
			for (var i = 0; i < max; i++) { 
			
				//Get each ingredient as a string of values
				var ingredientString = firstSplit[i].toString();
				
				//split that string by commas, discarding whitespace
				ingredientString = ingredientString.trim;
				var secondSplit = ingredientString.split(",");
				
				//check all fields are there...
				if (secondSplit.length === 13){
					
					//add to database.
					database= database.concat([new Herb(secondSplit[0],secondSplit[1],secondSplit[2],secondSplit[3],secondSplit[4],secondSplit[5],secondSplit[6],secondSplit[7],secondSplit[8],secondSplit[9],secondSplit[10],secondSplit[11],secondSplit[12])]);
				}
			}
		}
    }
    rawFile.send(null);
}
	

//Search functionality
function searchHerbs() {
	
	//get herbName from search box
	var herbName = document.getElementById("herbName").value;
	herbName= herbName.trim;
	
	//convert into a regex string
	var regExpHerb = regexp (herbName, i);
	
	//Get the Div where data will be shown.
	var divField = document.getElementById('dataReturn');
	
	//while there is a first child
	while(divField.firstChild){
	//remove first child
    divField.removeChild(divField.firstChild);
 }
	
	//create a table, insert a row of headers.
	var table = document.createElement("table");
	var tr = table.insertRow();
	var th = document.createElement('th');
	var td;
	table.setAttribute('border', '1');
	table.setAttribute('cellspacing', '0');
	table.setAttribute('cellpadding', '5');
	
	th.innerHTML = "Ingredient";
	tr.appendChild(th);
	th = document.createElement('th');
	th.innerHTML = "Effect";
	tr.appendChild(th);
	th = document.createElement('th');
	th.innerHTML = "Value";
	tr.appendChild(th);
	th = document.createElement('th');
	th.innerHTML = "Mag";
	tr.appendChild(th);
	
	//loop through the database.
	var databaseLength = database.length;
	for (var i= 0; i < databaseLength; i++){
		if (regExpHerb.test (database[i].name) || regExpHerb.test(database[i].effect1) || regExpHerb.test(database[i].effect2) || regExpHerb.test(database[i].effect3) || regExpHerb.test(database[i].effect4)){
			
			tr = table.insertRow();
			td = tr.insertCell();
			td.innerHTML =  database[i].name;
			td.setAttribute('rowspan', '4');
			td = tr.insertCell();
			td.innerHTML =  database[i].effect1;
			td = tr.insertCell();
			td.innerHTML =  database[i].val1;
			td = tr.insertCell();
			td.innerHTML =  database[i].mag1;
			
			tr = table.insertRow();
			td = tr.insertCell();
			td.innerHTML =  database[i].effect2;
			td = tr.insertCell();
			td.innerHTML =  database[i].val2;
			td = tr.insertCell();
			td.innerHTML =  database[i].mag2;
			
			tr = table.insertRow();
			td = tr.insertCell();
			td.innerHTML =  database[i].effect3;
			td = tr.insertCell();
			td.innerHTML =  database[i].val3;
			td = tr.insertCell();
			td.innerHTML =  database[i].mag3;
			
			tr = table.insertRow();
			td = tr.insertCell();
			td.innerHTML =  database[i].effect4;
			td = tr.insertCell();
			td.innerHTML =  database[i].val4;
			td = tr.insertCell();
			td.innerHTML =  database[i].mag4;
		}
	}
	divField.appendChild(table);
}
	

					  
//myHeading.textContent = herb1.name;

var myHeading = document.querySelector('h1');

var herbData = ['Abecean Longfin', 	'Weakness to Frost', 1.0, 1.0, 
									'Fortify Sneak', 1.0, 1.0, 
									'Weakness to Poison', 1.0, 1.0, 
									'Fortify Restoration', 1.0, 1.0];
									
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

function searchHerbs() {
	var herbName = document.getElementById("herbName").value;
	
	var herbNameField = document.getElementById('herbNameField');
	var effect1field = document.getElementById('effect1field');
	var effect2field = document.getElementById('effect2field');
	var effect3field = document.getElementById('effect3field');
	var effect4field = document.getElementById('effect4field');
	var val1field= document.getElementById('val1field');
	var val2field= document.getElementById('val2field');
	var val3field= document.getElementById('val3field');
	var val4field= document.getElementById('val4field');
	var mag1field= document.getElementById('mag1field');
	var mag2field= document.getElementById('mag2field');
	var mag3field= document.getElementById('mag3field');
	var mag4field= document.getElementById('mag4field');
	
	var divField = document.getElementById('dataReturn');
	
	var herb = new Herb;
	
	switch (herbName){
		case (herb1.name):
			herb = herb1;
		break;
		case (herb2.name):
			herb = herb2;
		break;
	}
	
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
	
	tr = table.insertRow();
	td = tr.insertCell();
	td.innerHTML =  herb.name;
	td.setAttribute('rowspan', '4');
	td = tr.insertCell();
	td.innerHTML =  herb.effect1;
	td = tr.insertCell();
	td.innerHTML =  herb.val1;
	td = tr.insertCell();
	td.innerHTML =  herb.mag1;
	
	tr = table.insertRow();
	td = tr.insertCell();
	td.innerHTML =  herb.effect2;
	td = tr.insertCell();
	td.innerHTML =  herb.val2;
	td = tr.insertCell();
	td.innerHTML =  herb.mag2;
	
	tr = table.insertRow();
	td = tr.insertCell();
	td.innerHTML =  herb.effect3;
	td = tr.insertCell();
	td.innerHTML =  herb.val3;
	td = tr.insertCell();
	td.innerHTML =  herb.mag3;
	
	tr = table.insertRow();
	td = tr.insertCell();
	td.innerHTML =  herb.effect4;
	td = tr.insertCell();
	td.innerHTML =  herb.val4;
	td = tr.insertCell();
	td.innerHTML =  herb.mag4;

	divField.appendChild(table);
}
	
var herb1 = new Herb ('Abecean Longfin', 
					  'Weakness to Frost', 1.0, 2.0,
					  'Fortify Sneak', 3.0, 4.0, 
					  'Weakness to Poison', 5.0, 6.0,
					  'Fortify Restoration', 7.0, 8.0);

var herb2 = new Herb ('Ancestor Moth Wing', 
					  'Damage Stamina', 1.0, 1.0,
					  'Fortify Conjuration', 1.0, 1.0, 
					  'Damage Magicka Regen', 1.0, 1.0,
					  'Fortify Enchanting', 1.0, 1.0);
					  
//myHeading.textContent = herb1.name;
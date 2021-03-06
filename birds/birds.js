/* Birds Market Code Here */

var objectBirds = [];

/* Constructors */

function Bird (t, c, p, o) {
	this.b_type = t;
	this.count = c;
	this.price = p;
	this.operation = o;
}

Bird.prototype.setCount = function(count) {
	return this.count = count;
}
	
Bird.prototype.setPrice = function(price) {
	return this.price = price;
}


/* UTILS */

var addButton = document.getElementById("add_bm_bird");
var buyButton = document.getElementById("buy_birds");

var marketTable = document.getElementById("birds-market");
var summaryMarket = document.getElementById("birds-summary");

var buyKeyUp = document.getElementById("b_count");	


/*
* LISTENERS FUNCTION*
*/

/* test data */

addTestBirdToMarket("Duck", 10, 8);
addTestBirdToMarket("Doves", 15, 10);


/* Event Listener For add Bird To Market*/

function addTestBirdToMarket(b_type, count, price) { 
	
	var bird = new Bird(b_type, count, price, "Added" );
	
	objectBirds.push(bird);
	
	for (var birds in bird) {
		var b_type =  bird.b_type;
		var count =  bird.count;
		var price =  bird.price;
		var operation =  bird.operation;
	}
	
    var row = marketTable.insertRow();
	
    var c_1 = row.insertCell(0);
    c_1.innerHTML = b_type;
    var c_2 = row.insertCell(1);
    c_2.innerHTML = count;
	var c_3 = row.insertCell(2);
    c_3.innerHTML = price;
	
	addToSummary(b_type,count,price,operation);
}

addButton.addEventListener( "click", addBirdToMarket, false);
function addBirdToMarket() {
	
	var bm_Type = document.getElementById("bm_type").value;
	var bm_Count = document.getElementById("bm_count").value;	
	var bm_Price = document.getElementById("bm_price").value;	
	
	
	for (var i = 0; i < objectBirds.length;i++) {
		if (objectBirds[i].type == bm_Type) {
			var b = objectBirds[i];
			b.setCount(bm_Count);
			b.setPrice(bm_Price);
		}
	} 
	
	console.log(objectBirds);
}


/* Get Total Sum, When Buy*/
function buyBird() {
	var b_type = document.getElementById("b_select").value;	
	var b_Count = document.getElementById("b_count").value;	
	
	var addTotal = document.getElementById("total-price");
	
}

buyKeyUp.addEventListener( "keydown" , buyBird);


/*
* UTILS FUNCTION *
*/

/* Add To Summary Function */
function addToSummary(b_type,count,price,operation) {
    var row = summaryMarket.insertRow();
	
    var c_1 = row.insertCell(0);
    c_1.innerHTML = b_type;
	
    var c_2 = row.insertCell(1);
    c_2.innerHTML = count;
	
	var c_3 = row.insertCell(2);
    c_3.innerHTML = price;
	
	var c_4 = row.insertCell(3);
    c_4.innerHTML = operation;
}

/* Clear Input Text */
function clearForm() {	
  var childNodes = document.querySelectorAll('.market-form input');
  for (var i=0; i<childNodes.length; i++) {   
    if (childNodes[i].type == "text") {
		childNodes[i].value = "";
	}	
  }
}

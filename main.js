const Stock = [
	["Burger", 50, 10, 0],
	["Fries", 15, 15, 0],
	["Cheese", 20, 8, 0],
	["Tea", 12, 12, 0],
	["Juice", 25, 10, 0],
	["Pizza", 80, 5, 0],
	["Salad", 30, 7, 0],
	["Hot Dog", 25, 10, 0],
	["Chicken Wings", 35, 8, 0],
	["Soda", 10, 20, 0],
	["Coffee", 15, 15, 0],
	["Pasta", 45, 6, 0],
];

const Orders = [];

console.log(Stock);
function CalcNoItems(Items) {
	let Counter = 0;
	for (let i = 0; i < Orders.length; i++) {
		if (Items === Orders[i]) {
			Counter++;
		}
	}
	document.getElementById(Items).innerHTML = Counter;
}

function AdItems(Item) {
	Orders.push(Item);
	for (let i = 0; i < Stock.length; i++) {
		if (Item === Stock[i][0]) {
			Stock[i][2] += 1;
			document.getElementById(Stock[i][0]).innerHTML = Stock[i][3];
			break;
		}
	}
	for (let i = 0; i < Stock.length; i++) {
		if (Item === Stock[i][0]) {
			Stock[i][3] += 1;
		}
	}
	CalcNoItems(Item);
	CartItems();
	CalculateTotal();
	BillShow("+", Item);
	console.log(Orders);
}
// function RemoveBillShow(Item) {
function BillShow(Enter, Item) {
	let No = "";
	let Price = "";
	for (let i = 0; i < Stock.length; i++) {
		if (Item === Stock[i][0]) {
			No = Stock[i][3];
			Price = Stock[i][1];
		}
	}
	let Child = "";
	let Grand1 = "";
	let Grand2 = "";
	let Grand3 = "";
	let Grand4 = "";
	if (No <= 1 && Enter === "+") {
		Parent = document.getElementById("Items");
		Child = document.createElement("div");
		Parent.appendChild(Child);
		Grand1 = document.createElement("div");
		Grand2 = document.createElement("div");
		Grand3 = document.createElement("div");
		Grand4 = document.createElement("div");
		Child.setAttribute("id", `Items${Item}`);
		Child.setAttribute("class", `Items${Item}`);
		Grand1.setAttribute("id", `NumberOf${Item}`);
		Grand2.setAttribute("id", `Item${Item}`);
		Grand3.setAttribute("id", `Price${Item}`);
		Grand4.setAttribute("id", `TotalPrice${Item}`);
		Child.appendChild(Grand1);
		Child.appendChild(Grand2);
		Child.appendChild(Grand3);
		Child.appendChild(Grand4);
	} else if (No === 0 && Enter === "-") {
		document.getElementById(`Items${Item}`).remove();
	} else {
		document.getElementById(`NumberOf${Item}`).innerHTML = No;
		document.getElementById(`Item${Item}`).innerHTML = Item;
		document.getElementById(`Price${Item}`).innerHTML = Price;
		document.getElementById(`TotalPrice${Item}`).innerHTML = No * Price;
	}
}

// const TotalNoTax = document.createElement("div");
// TotalNoTax.setAttribute("id", "TotalNoTax");
// const Foot1 = document.createElement("div");
// Foot1.textContent = Tax();
// Parent.appendChild(Foot1);

// function RemoveBillShow(Item) {
// 	let a = document.getElementById(`Items${Item}`);
// 	for (let i = 0; i < Stock.length; i++) {
// 		if (Item === Stock[i][0]) {
// 			a.innerHTML = Stock[i][3];
// 			if (Stock[i][3] === 0) {
// 				a.remove()
// 			}
// 		}}
// 	}

function RemoveItems(Item) {
	const index = Orders.indexOf(Item);
	if (index >= 0) {
		Orders.splice(index, 1);
	}
	for (let i = 0; i < Stock.length; i++) {
		if (Item === Stock[i][0] && Stock[i][3] > 0) {
			Stock[i][3] -= 1;
		}
	}
	BillShow("-", Item);
	// let a = document.getElementById(Itema).innerText
	// if (a === 0) {
	CalculateTotal();
	// }
	CalcNoItems(Item);
	CartItems();
	console.log(Orders);
}

function Tax() {
	let TaxValue = 12;
	const Yes = document.getElementById("YesTax");
	if (Yes.checked) {
		TaxValue = document.getElementById("TaxValueWritten").value;
		TaxValue = TaxValue / 100;
		if (
			TaxValue === "" ||
			TaxValue === null ||
			TaxValue === 0 ||
			TaxValue < 0
		) {
			document.getElementById("TaxErrorMessage").innerHTML =
				"Please enter a valid tax";
		} else {
			document.getElementById("TaxErrorMessage").innerHTML = "";
		}
	} else {
		TaxValue = 0;
	}
	document.getElementById("Tax").innerHTML = TaxValue;
	if (TaxValue === 0) {
		document.getElementById("TotalWithTax").classList.toggle("hidden");
		document.getElementById("TaxDisplay").classList.toggle("hidden");
	}
	return TaxValue;
}
function CalculateTotal() {
	let Totali = 0;
	let Total = 0;
	for (let i = 0; i < Stock.length; i++) {
		const Num = Stock[i][1] * Stock[i][3];
		Totali += Num;
	}
	Total = Totali + Totali * Tax();
	document.getElementById("TotalNoTax").innerHTML = Totali;
	document.getElementById("Total").innerHTML = Total;
}

function ShowTax(a) {
	if (a) {
		document.getElementById("TaxInputContainer").classList.remove("hidden");
	} else {
		document.getElementById("TaxInputContainer").classList.add("hidden");
	}
}

// function ProcessOrder(Orders) {
// 	let PriceList = [];
// 	let TotalPrice = 0;
// 	let TotalPrice_NoTax = 0;
// 	let AllowTax = true;
// 	let TaxValue = 0;
// 	function CalculateTotal() {
// 		for (let Price of PriceList) {
// 			TotalPrice_NoTax += Price;
// 		}
// 		return TotalPrice_NoTax;
// 	}
// 	function Tax(TaxValue = 0.12) {ئ
// 		if (AllowTax === true) {
// 			TotalPrice = TotalPrice_NoTax + TotalPrice_NoTax * TaxValue;
// 		} else {
// 			TotalPrice = TotalPrice_NoTax;
// 		}
// 		return TotalPrice;
// 	}
// 	function stock() {
// 		for (let i = 0; i < Types.length; i++) {
// 			for (let j = 0; j < Stock.length; j++) {
// 				if (Types[i] === Stock[j][0]) {
// 					Stock[j][2] -= 1;
// 			}
// 		}
//	}
// 			 	}

// 	CalculateTotal();
// 	Tax();
// 	stock();

// 	return PriceList + " => " + Math.ceil(TotalPrice) + " , " + Types;
// }

function Heart(i) {
	let e = 0;
	e++;
	if (e % 2 === 1) {
		document.getElementById(`Heart${i}`).classList.toggle("text-red-600");
		document.getElementById(`Heart${i}`).classList.toggle("text-white");
	} else if (e % 2 === 0) {
		document.getElementById(`Heart${i}`).classList.toggle("text-white");
	}
}
function CartItems() {
	NoItem = Orders.length;
	document.getElementById("CartNo").innerHTML = NoItem;
}

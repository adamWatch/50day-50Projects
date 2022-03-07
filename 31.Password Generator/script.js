const generator = document.querySelector(".generator");
const pass = document.querySelector(".pass");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");
const submit = document.getElementById("submit");
const copy = document.getElementById("copy");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()<>";

function getUppercase() {
	return uppercase[Math.floor(Math.random() * uppercase.length)];
}

function getLowercase() {
	return lowercase[Math.floor(Math.random() * lowercase.length)];
}

function getNumber() {
	return number[Math.floor(Math.random() * number.length)];
}

function getSymbol() {
	return symbol[Math.floor(Math.random() * symbol.length)];
}

function getRandomCharacter() {
	const checkedList = [];

	if (uppercaseEl.checked) {
		checkedList.push(getUppercase());
	}

	if (lowercaseEl.checked) {
		checkedList.push(getLowercase());
	}

	if (numberEl.checked) {
		checkedList.push(getNumber());
	}

	if (symbolEl.checked) {
		checkedList.push(getSymbol());
	}

	return checkedList[Math.floor(Math.random() * checkedList.length)];
}

function getPassword(length) {
	let pass = [];

	for (let i = 0; i < length; i++) {
		pass.push(getRandomCharacter());
	}

	return pass.join("");
}

generator.addEventListener("submit", (e) => {
	e.preventDefault();

	if (
		!lowercaseEl.checked &&
		!uppercaseEl.checked &&
		!numberEl.checked &&
		!symbolEl.checked
	) {
		return alert("Chose at least one type of password ");
	}

	const length = lengthEl.value;

	pass.value = getPassword(length);
});

copy.addEventListener("click", () => {
	if (!pass.value) {
		return alert("First generate password");
	}

	pass.select();
	document.execCommand("copy");
	alert("Password copied to clipboard");
});

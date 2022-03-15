const pass = document.getElementById("pass");
const gage = document.querySelector(".gage");

pass.addEventListener("input", (e) => {
	const input = e.target.value;
	const length = input.length;
	if (length > 4 && length < 7) {
		gage.style.backgroundColor = "orange";
		console.log("poma");
	} else if (length > 7 && length < 11) {
		gage.style.backgroundColor = "yellow";
		console.log("zol");
	} else if (length > 11) {
		gage.style.backgroundColor = "green";
		console.log("zielone");
	}
});

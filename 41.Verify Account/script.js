const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, id) => {
	code.addEventListener("keydown", (e) => {
		if (e.key >= 0 && e.key <= 9) {
			codes[id].value = "";
			setTimeout(() => codes[id + 1].focus(), 10);
		} else if (e.key === "Backspace") {
			setTimeout(() => codes[id - 1].focus(), 10);
		}
	});
});

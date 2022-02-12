const labels = document.querySelectorAll(".form-control label");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

labels.forEach((label) => {
	label.innerHTML = label.innerText
		.split("")
		.map(
			(letter, idx) =>
				`<span style="transition-delay:${idx * 50}ms" >${letter}</span>`
		)
		.join("");
});

email.addEventListener("focus", () => {
	const spans = document.querySelectorAll("label.email span");

	spans.forEach((span) => {
		span.classList.add("wave");
	});

	const removeSpans = document.querySelectorAll("label.password span");

	removeSpans.forEach((span) => {
		span.classList.remove("wave");
	});
});

pass.addEventListener("focus", () => {
	const spans = document.querySelectorAll("label.password span");
	spans.forEach((span) => {
		span.classList.add("wave");
	});

	const removeSpans = document.querySelectorAll("label.email span");

	removeSpans.forEach((span) => {
		span.classList.remove("wave");
	});
});

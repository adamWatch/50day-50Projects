const textarea = document.getElementById("textarea");
const choicesContainer = document.querySelector(".choices-container");

textarea.focus();

textarea.addEventListener("keydown", (e) => {
	createTags(e.target.value);

	if (e.code === "Enter") {
		setTimeout(() => {
			e.target.value = "";
		}, 10);

		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(",")
		.filter((tag) => tag.trim() !== "")
		.map((tag) => tag.trim());

	choicesContainer.innerHTML = "";

	tags.forEach((tag) => {
		const tagEl = document.createElement("div");
		tagEl.classList.add("choice");
		tagEl.innerText = tag;
		choicesContainer.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;

	const interval = setInterval(() => {
		const randomChoice = pickRandomChoice();

		highlightChoice(randomChoice);

		setTimeout(() => {
			unHighlightChoice(randomChoice);
		}, 100);
	}, 100);

	setTimeout(() => {
		clearInterval(interval);

		setTimeout(() => {
			const randomChoice = pickRandomChoice();

			highlightChoice(randomChoice);
		}, 100);
	}, times * 100);
}

function pickRandomChoice() {
	const choices = document.querySelectorAll(".choice");
	return choices[Math.floor(Math.random() * choices.length)];
}

function highlightChoice(choice) {
	choice.classList.add("picked");
}

function unHighlightChoice(choice) {
	choice.classList.remove("picked");
}

const textarea = document.getElementById("textarea");
const choicesContainer = document.querySelector(".choices-container");

textarea.focus();

let currentValue = "";
let choices = [];

textarea.addEventListener("keydown", (e) => {
	createTags(e.target.value);
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

const typingEl = document.querySelector(".typing");
const speedEl = document.querySelector(".speed");

const text = "I love Programing in JS";
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
	typingEl.innerText = text.slice(0, idx);

	idx++;

	if (idx > text.length) {
		idx = 1;
	}

	setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

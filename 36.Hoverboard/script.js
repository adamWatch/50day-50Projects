const container = document.getElementById("container");
console.log(container);

function renderSquares() {
	for (let i = 0; i < 256; i++) {
		const div = document.createElement("div");
		div.classList.add("square");

		container.appendChild(div);
	}
}

renderSquares();

const squares = document.querySelectorAll(".square");
const colors = [
	"green",
	"blue",
	"purple",
	"red",
	"yellow",
	"indigo",
	"royalblue",
	"crimson",
	"violet",
	"orange",
	"azure",
	"khaki",
	"brown",
	"golden",
];

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

squares.forEach((square) =>
	square.addEventListener("mouseenter", (e) => {
		e.target.style.backgroundColor = getRandomColor();
		console.log("dziala");

		setTimeout(() => {
			e.target.style.backgroundColor = "";
		}, 1000);
	})
);

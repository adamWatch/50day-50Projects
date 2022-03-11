const container = document.getElementById("container");
console.log(container);

function renderSquares() {
	// const squares = [];

	for (let i = 0; i < 256; i++) {
		const div = document.createElement("div");
		div.classList.add("square");
		//squares.push('div');

		container.appendChild(div);
	}
}

renderSquares();

const boxesContainer = document.getElementById("boxes");
const btn = document.getElementById("btn");

function createBox(x, y) {
	const box = document.createElement("div");

	box.classList.add("box");
	box.style.backgroundPosition = `${x}px ${y}px`;

	return box;
}

function renderBoxes() {
	let x = 0;
	let y = 0;

	boxesContainer.appendChild(createBox(x, y));

	for (let i = 0; i < 3; i++) {
		const box = createBox((x -= 125), y);

		boxesContainer.appendChild(box);
	}

	x = 0;
	y = -125;

	boxesContainer.appendChild(createBox(x, y));
	for (let i = 0; i < 3; i++) {
		const box = createBox((x -= 125), (y = -125));

		boxesContainer.appendChild(box);
	}

	x = 0;
	y = -250;
	boxesContainer.appendChild(createBox(x, y));
	for (let i = 0; i < 3; i++) {
		const box = createBox((x -= 125), (y = -250));

		boxesContainer.appendChild(box);
	}

	x = 0;
	y = -375;
	boxesContainer.appendChild(createBox(x, y));
	for (let i = 0; i < 3; i++) {
		const box = createBox((x -= 125), (y = -375));

		boxesContainer.appendChild(box);
	}
}

renderBoxes();

function magic() {
	boxesContainer.classList.toggle("big");
}

btn.addEventListener("click", magic);

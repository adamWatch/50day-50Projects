const AMOUNT_OF_IMAGE = 21;

const container = document.querySelector(".container");
const imgSRC = `https://source.unsplash.com/random/`;

for (let i = 0; i < AMOUNT_OF_IMAGE; i++) {
	const img = document.createElement("img");
	img.src = `${imgSRC}${getRandomSize()}x${getRandomSize()}`;
	container.appendChild(img);
}

function getRandomSize() {
	return Math.floor(Math.random() * 10) + 300;
}

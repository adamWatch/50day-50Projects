const counterText = document.querySelector(".counterText");
const img = document.getElementById("img");

let counter = 0;

img.addEventListener("dblclick", (e) => {
	const heart = document.createElement("i");
	heart.classList.add("fa-solid");
	heart.classList.add("fa-heart");

	const x = e.clientX;
	const y = e.clientY;

	const leftOffset = e.target.offsetLeft;
	const toptOffset = e.target.offsetTop;

	const xInside = x - leftOffset;
	const yInside = y - toptOffset;

	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	img.appendChild(heart);

	counterText.innerHTML = `You liked it ${counter++} times`;

	setTimeout(() => heart.remove(), 1000);
});

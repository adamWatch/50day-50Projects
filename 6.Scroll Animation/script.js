const container = document.getElementById("container");

const windowHeight = window.innerHeight;
const rectangleHeight = windowHeight / 4;
let allRectangleHeight = 0;
console.log(rectangleHeight);

function drawRectangle() {
	const rectangle = document.createElement("div");
	rectangle.style.height = rectangleHeight;
	allRectangleHeight += rectangleHeight;
	rectangle.innerText = "Box";
	rectangle.classList.add("box");
	container.appendChild(rectangle);
}

drawRectangle();
drawRectangle();
drawRectangle();

document.addEventListener("scroll", () => {
	let scrollY = window.scrollY;

	if (
		scrollY + windowHeight - rectangleHeight * 2 >= allRectangleHeight &&
		scrollY < allRectangleHeight + rectangleHeight
	) {
		drawRectangle();
	}
});

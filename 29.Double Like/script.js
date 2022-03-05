const counterText = document.querySelector(".counterText");
const img = document.getElementById("img");

let counter = 0;

img.addEventListener("dblclick", () => {
	counterText.innerHTML = `You liked it ${counter++} times`;
});

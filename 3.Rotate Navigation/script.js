const main = document.querySelector(".main");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	main.classList.add("rotate");
});

const container = document.querySelector(".container");
const openBtn = document.getElementById("open");

openBtn.addEventListener("click", () => {
	container.classList.toggle("show-nav");
});

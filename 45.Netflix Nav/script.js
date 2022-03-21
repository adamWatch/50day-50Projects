const containers = document.querySelectorAll(".container");
const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");

btnOpen.addEventListener("click", () => {
	containers.forEach((container) => {
		container.classList.add("active");
	});
});

btnClose.addEventListener("click", () => {
	containers.forEach((container) => {
		container.classList.remove("active");
	});
});

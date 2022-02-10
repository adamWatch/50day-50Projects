const cards = document.querySelectorAll(".panel");

cards.forEach((card) => {
	card.addEventListener("click", () => {
		cards.forEach((card) => card.classList.remove("active"));
		card.classList.add("active");
	});
});

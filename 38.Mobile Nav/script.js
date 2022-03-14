const header = document.getElementById("head");
const links = document.querySelectorAll(".menu__link");
const imgs = document.querySelectorAll(".content");

links.forEach((link, id) => {
	link.addEventListener("click", (e) => {
		if (e.target.id === imgs[id].id) {
			hideContent();
			imgs[id].classList.add("active");
		}
	});
});

function hideContent() {
	imgs.forEach((img) => img.classList.remove("active"));
}

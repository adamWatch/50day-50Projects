const header = document.querySelector(".header");

const banner = document.querySelector(".banner");

const menuLinks = document.querySelectorAll(".menu__link");

document.addEventListener("scroll", () => {
	if (window.scrollY > 150) {
		header.classList.add("scrolled-background");
		banner.classList.add("scrolled");
		menuLinks.forEach((link) => link.classList.add("scrolled"));
	} else {
		header.classList.remove("scrolled-background");
		banner.classList.remove("scrolled");
		menuLinks.forEach((link) => link.classList.remove("scrolled"));
	}
});

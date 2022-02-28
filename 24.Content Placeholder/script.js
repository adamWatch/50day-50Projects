const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData() {
	header.innerHTML = `<img src="sun.jpg" alt="" />`;
	title.innerHTML = `Lorem ipsum dolor sit`;
	excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni omnis
    fuga autem, possimus laudantium, excepturi commodi distinctio
    nesciunt, sunt dolores atque id! Voluptates nihil accusamus eum. Qui,
    magni harum. Aspernatur.`;
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />`;
	name.innerHTML = `John Kowalsky`;
	date.innerHTML = `jun 05, 2022`;

	animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
	animated_bg_text.forEach((bg) => bg.classList.remove("animated-bg-text"));
}

setTimeout(getData, 2000);

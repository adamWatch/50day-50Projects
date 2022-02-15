const API_URL = "https://icanhazdadjoke.com/slack";

const joke = document.getElementById("joke");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	getJoke(API_URL);
});

async function getJoke(url) {
	const resp = await fetch(url);

	const respData = await resp.json();

	console.log(respData.attachments[0].text);
	joke.innerText = respData.attachments[0].text;
}

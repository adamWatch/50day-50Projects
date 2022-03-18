const faces = document.querySelectorAll(".face");
const btn = document.getElementById("btn");
const container = document.querySelector(".container");

faces.forEach((face) => {
	face.addEventListener("click", () => {
		faces.forEach((face) => face.classList.remove("focus"));
		face.classList.add("focus");
	});
});

function sendReview() {
	const opinion = document.querySelector(".face.focus small").innerText;

	container.innerHTML = `
                <h1>Your opinion is ${opinion}</h1>
        <h2 class="feedback">Thanks for your opinion. We want improve our services in future</h2>
        `;
}

btn.addEventListener("click", sendReview);

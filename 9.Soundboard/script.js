const sounds = ["guitar", "lunchbox", "shoot", "spray", "turnpages"];

sounds.forEach((sound) => {
	const btn = document.createElement("button");
	btn.classList.add("btn");

	btn.innerText = sound;

	btn.addEventListener("click", () => {
		document.getElementById(sound).play();
	});

	document.getElementById("buttons").appendChild(btn);
});

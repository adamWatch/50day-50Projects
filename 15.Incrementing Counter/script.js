const counters = document.querySelectorAll(".counter");
const results = [15220, 501120, 3570];
const speed = 300;

let increments = results.map((result) => {
	return (result = result / speed);
});

for (let i = 0; i < counters.length; i++) {
	counters[i].innerText = "0";

	const updateCounter = () => {
		const c = +counters[i].innerText;

		if (c < results[i]) {
			counters[i].innerText = `${Math.ceil(c + increments[i])}`;
			setTimeout(updateCounter, 1);
		} else {
			counters[i].innerText = results[i];
		}
	};

	updateCounter();
}

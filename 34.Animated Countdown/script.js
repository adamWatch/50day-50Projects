const nums = document.querySelectorAll(".num span");
const counter = document.querySelector(".counter");
const finalMessage = document.querySelector(".final");
const rerun = document.getElementById("replay");

startAnimation();

function resetDOM() {
	counter.classList.remove("hide");
	finalMessage.classList.remove("show");

	nums.forEach((num) => {
		num.classList.value = "";
	});

	nums[0].classList.add("in");
}

function startAnimation() {
	nums.forEach((num, id) => {
		const nextToLast = nums.length - 1;

		num.addEventListener("animationend", (e) => {
			if (e.animationName === "in" && id !== nextToLast) {
				num.classList.remove("in");
				num.classList.add("out");
			} else if (e.animationName === "out" && num.nextElementSibling) {
				num.nextElementSibling.classList.add("in");
			} else {
				counter.classList.add("hide");
				finalMessage.classList.add("show");
			}
		});
	});
}

rerun.addEventListener("click", () => {
	resetDOM();
	startAnimation();
});

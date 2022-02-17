const btns = document.querySelectorAll(".question-toggle");
const questions = document.querySelectorAll(".question");

for (let i = 0; i < questions.length; i++) {
	btns[i].addEventListener("click", () => {
		questions[i].classList.toggle("active");
	});
}

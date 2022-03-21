const quizData = [
	{
		question: "What title is blizzards card game?",
		a: "Magic: The Gathering Online",
		b: "The Elder Scrolls: Legends",
		c: "Gwent: The Witcher Card Game",
		d: "Hearthstone",
		correct: "d",
	},
	{
		question: "What name is Valve boss?",
		a: "Gabe Newell",
		b: "Bobby Kotick",
		c: "Bill Gates",
		d: "Marc Zuckerberg",
		correct: "a",
	},
	{
		question: "Where the action takes place game Fable: Lost Chapters?",
		a: "New York",
		b: "Albion",
		c: "Tamriel",
		d: "Khorinis",
		correct: "b",
	},
	{
		question: "Which game is cyberpunk setting?",
		a: "Cyberpunk 2077",
		b: "Deus Ex",
		c: "Ghostrunner",
		d: "all answer is correct",
		correct: "d",
	},
	{
		question: "Who is main character Hades?",
		a: "Hades",
		b: "Hermes",
		c: "Zagreus",
		d: "Heracles",
		correct: "c",
	},
];

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function getSelected() {
	let answer = undefined;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
		}
	});

	return answer;
}

function loadQuiz() {
	deselectAnswers();

	const currentQuizData = quizData[currentQuiz];
	questionEl.innerText = currentQuizData.question;
	a_text.innerText = currentQuizData.a;
	b_text.innerText = currentQuizData.b;
	c_text.innerText = currentQuizData.c;
	d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answerEl.checked = false;
		}
	});
}

submitBtn.addEventListener("click", () => {
	const answer = getSelected();

	if (answer) {
		if (answer === quizData[currentQuiz].correct) {
			score++;
		}
		currentQuiz++;
		if (currentQuiz < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h3> You answered correctly at  ${score}/${quizData.length} questions.</h3> 
            
            <button onclick="location.reload()"> Reload </button> `;
		}
	}
});

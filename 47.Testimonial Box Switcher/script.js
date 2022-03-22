const users = [
	{
		testimonialText:
			"Best AI writer and copywriting assistant in the market.He is highly skilled in JavaScript. He has 7 years experience in programming company.",
		imgUser: `https://randomuser.me/api/portraits/men/99.jpg`,
		userName: "John Case",
		userPosition: "JavaScript Programmer",
	},
	{
		testimonialText:
			"He is best Java programmer in our company.This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. ",
		imgUser: `https://randomuser.me/api/portraits/men/80.jpg`,
		userName: "George Butter",
		userPosition: "Java Programmer",
	},
	{
		testimonialText:
			"She is best C++ programmer .She has 5 years experience in programming. She was worked in game development on Witcher 3 . She write clean and clear code ",
		imgUser: `https://randomuser.me/api/portraits/women/6.jpg`,
		userName: "Scarlet Gate",
		userPosition: "C++ Programmer",
	},
	{
		testimonialText:
			"I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time. ",
		imgUser: `https://randomuser.me/api/portraits/men/97.jpg`,
		userName: "Alex Mercer",
		userPosition: "Ui Desinger",
	},
];

const testimonialText = document.querySelector(".testimonial__text");
const imgUser = document.querySelector(".img__user");
const userName = document.querySelector(".user__name");
const userPosition = document.querySelector(".user__position");

let i = 0;

function changeUser() {
	if (i > users.length - 1) {
		i = 0;
	}

	testimonialText.innerText = users[i].testimonialText;
	imgUser.src = users[i].imgUser;
	userName.innerText = users[i].userName;
	userPosition.innerText = users[i].userPosition;
	i++;
}

setInterval(() => {
	changeUser();
}, 10000);

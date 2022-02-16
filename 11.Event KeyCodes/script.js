const boxes = document.querySelectorAll(".box");

document.addEventListener("keyup", (e) => {
	boxes[0].innerText = e.key;
	boxes[1].innerText = e.keyCode;
	boxes[2].innerText = e.code;
});

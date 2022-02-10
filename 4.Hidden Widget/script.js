const search = document.getElementById("search");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
	search.value = "";
	search.classList.toggle("on");
	search.disabled = !search.disabled;
	search.focus();
});

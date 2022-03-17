const URL_API = "https://randomuser.me/api?results=100";

const usersContainer = document.querySelector(".users__container");
const search = document.getElementById("search");

async function getUsers() {
	const resp = await fetch(URL_API);
	const respData = await resp.json();

	const { results } = respData;

	usersContainer.innerHTML = "";

	results.forEach((result) => {
		const user = document.createElement("div");
		user.classList.add("user");

		user.innerHTML = `
        
					<img src="${result.picture.large}" alt="" />
					<div class="user__info">
						<h2 id="user__name">${result.name.first} ${result.name.last}</h2>
						<small id="user__adress">${result.location.city} ${result.location.country}</small>
					</div>
				
        `;
		usersContainer.appendChild(user);
	});
}

getUsers();

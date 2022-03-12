const container = document.querySelector(".container");

let id = 1;

let URL_API = `https://pokeapi.co/api/v2/pokemon/1/`;

async function getPokemon() {
	const resp = await fetch(URL_API);
	const respData = await resp.json();

	return respData;
}

function setColorOfType(type, card) {
	if (type === "grass") {
		card.style.backgroundColor = "green";
	} else if (type === "fire") {
		card.style.backgroundColor = "goldenrod";
	} else if (type === "water") {
		card.style.backgroundColor = "royalblue";
	} else if (type === "bug") {
		card.style.backgroundColor = "brown";
	} else if (type === "normal") {
		card.style.backgroundColor = "yellow";
	} else if (type === "poison") {
		card.style.backgroundColor = "olive";
	} else if (type === "ground") {
		card.style.backgroundColor = "khaki";
	} else if (type === "fighting") {
		card.style.backgroundColor = "purple";
	} else if (type === "psychic") {
		card.style.backgroundColor = "indigo";
	}
}

async function renderPokedex() {
	for (let i = 1; i < 72; i++) {
		const data = await getPokemon();

		const card = document.createElement("div");

		card.classList.add("card");

		card.innerHTML = `<img src="${
			data.sprites.other["official-artwork"].front_default
		}" alt="" />
        <small class="id">#${id}</small>
        <h1>${data.name}</h1>
        <small>type: ${
					(setColorOfType(data.types[0].type.name, card),
					data.types[0].type.name)
				}</small>`;

		container.appendChild(card);

		id += 1;
		URL_API = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	}
}

renderPokedex();

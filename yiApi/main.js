const url = "https://pokeapi.co/api/v2/";

async function getAllItems() {
  const response = await fetch(url + "item");

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } else {
    throw new Error("Network error!");
  }
}

async function getRandomItem() {
  const randomNumber = Math.floor(Math.random() * 2180);
  const response = await fetch(url + `item/${randomNumber}`);

  if (response.ok) {
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    return jsonResponse;
  } else {
    throw new Error("Network error!");
  }
}

// DOM & Events
const randomBtn = document.getElementById("random-item-btn");
randomBtn.addEventListener("click", handleClick);

const randomImg = document.getElementById("item-img");

const itemNameContainer = document.getElementById("item-name");

const itemEffectContainer = document.getElementById("item-effect");

async function handleClick(e) {
  let item = await getRandomItem();
  console.log(item);

  /* Set the image to the sprite of the item, if it exists */
  if (item.sprites.default) {
    randomImg.setAttribute("src", item.sprites.default);
  } else {
    randomImg.setAttribute(
      "src",
      "https://www.pngitem.com/pimgs/m/71-718954_pokemon-question-mark-png-pokemon-unown-question-mark.png"
    );
  }

  /* Set the name to the English name of the item */
  let englishName = item.names.filter((obj) => {
    return obj.language.name === "en";
  });

  itemNameContainer.innerText = englishName[0].name;

  randomImg.setAttribute("alt", englishName[0].name);

  /* Set the effect of the item, if it exists */
  if (item.effect_entries[0]) {
    itemEffectContainer.innerText = item.effect_entries[0].effect;
  } else {
    itemEffectContainer.innerText = "No Effect";
  }
}

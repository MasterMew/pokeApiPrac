const url = 'https://pokeapi.co/api/v2/item/';

const bussy = document.getElementById("display");
const button = document.getElementById("butt");

button.addEventListener("click", itemGo);

async function itemGo(e){
    const itempicked = await pokeshit();
    console.log(itempicked);
    bussy.innerHTML = itempicked["name"];
}

const pokeshit = async () => {
    const rng = Math.floor(Math.random() * 2179) + 1;
    const endpoint = `${url}${rng}`;
    let respy;

    const fetchBoy = await fetch(endpoint).then(
        async (response) => {
            if(response.ok) {
                respy = await response.json();         
                // console.log(respy);       
            } else {
                throw new Error("Request failed!");
            }
        } , (networkError) => {
            console.log(networkError.message);
        }
    );
    return respy
};
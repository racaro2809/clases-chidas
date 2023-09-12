import fetch from 'node-fetch';
const URL = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151';

function traerUrlsPokemon1() {
    fetch(URL)
        .then((resultado) => {
            return resultado.json();
        })
        .then(data => {
            console.log(data.results);
            const pokemons = data.results;
            const pokemonUrl = pokemons[150].url;

            fetch(pokemonUrl)
                .then(resultado => {
                    return resultado.json()
                })
                .then(charmanderInfo => {
                    console.log(charmanderInfo);
                })
        })
}

async function traerUrlsPokemons2() {
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data.results);
    const pokemons = data.results;
    const mewUrl = pokemons[150].url;

    const pokemonRes = await fetch(mewUrl);
    const mew = await pokemonRes.json();
    console.log(mew.weight);
}

traerUrlsPokemons2();
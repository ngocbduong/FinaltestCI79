import axios from 'axios';

export async function getPokemonList() {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    let result = response.data;
    return result;
}

export async function getPokemonDetail(name) {
    let response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
    let result = response.data;
    return result;
}
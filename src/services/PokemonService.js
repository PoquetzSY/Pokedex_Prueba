import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2/";

export default class PokemonService {
    static async getPokemon(id) {
        const response = await axios.get(`${BASE_URL}pokemon/${id}`);
        console.log(response.data);
        return response.data;
    }
    static async getTypes(typeName) {
        const response = await axios.get(`${BASE_URL}type/${typeName}`);
        console.log(response.data);
        return response.data
    }
}
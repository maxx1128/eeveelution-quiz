class PokeAPIRequest {
  constructor(name) {
    this.name = name;

    this.requestUrl = 'https://pokeapi.co/api/v2';
  }

  async getSpeciesData() {
    let response = await fetch(`${this.requestUrl}/pokemon-species/${this.name}/`);
    let data = await response.json();
    return data;
  }
}

export default PokeAPIRequest;

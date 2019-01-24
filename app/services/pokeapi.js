import fetch from 'fetch';

class PokeAPIRequest {
  constructor(name) {
    this.name = name;

    this.requestUrl = 'https://pokeapi.co/api/v2';
  }

  async getSpeciesData() {
    const response = await fetch(`${this.requestUrl}/pokemon-species/${this.name}/`);
    const data = await response.json();
    return data;
  }

  async getBasicData() {
    const response = await fetch(`${this.requestUrl}/pokemon/${this.name}/`);
    const data = await response.json();
    return data;
  }

  async getAllData() {
    const species = await this.getSpeciesData();
    const base = await this.getBasicData();

    return {
      species: species,
      base: base
    };
  }
}

export default PokeAPIRequest;

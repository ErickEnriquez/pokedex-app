import axios from 'axios'

export const getEvolutionChain = async (activePokemon) => {

	let pokemonInChain = []

	const speciesUrl = activePokemon.species.url

	const response = await axios.get(speciesUrl)

	const res = await axios.get(response.data.evolution_chain.url)

	let temp = res.data.chain

	while (temp?.evolves_to) {
		//request is to https://pokeapi.co/api/v2/pokemon/{temp.species.name}/ instead of using
		//temp.species.url since we want url to the sprites which is only returned when using first url
		pokemonInChain.push(await axios.get(`https://pokeapi.co/api/v2/pokemon/${temp.species.name}/`))
		temp = temp?.evolves_to[0]
	}

	const finalChain = await Promise.all(pokemonInChain)

	const data = finalChain.map(element => {
		return element.data
	})



	return data
}
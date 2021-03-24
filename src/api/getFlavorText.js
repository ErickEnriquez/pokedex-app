import axios from 'axios'

export const getFlavorText = async (activePokemon) => {
	const speciesUrl = activePokemon.species.url

	const res = await axios.get(speciesUrl)

	const data = res.data

	//we search through the flavor text entries because the first one isn't always in english
	const text = data.flavor_text_entries.find(element => {
		return element.language.name === 'en'
	})

	return text.flavor_text
}

export default getFlavorText
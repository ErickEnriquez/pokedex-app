const fetch = require('node-fetch')


	//return all original 151 pokemon
export const getKantoPokemon =  async () => {
		//create an array of promises to pass to PromiseAll
		let responses = [];
		for (let i = 1; i <= 893; i++) {
			responses.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`));
		}
		//wait until we get response from all of the responses
		let res = await Promise.all(responses)
		//wait until all of the elements of res which is in array of response
		//objects is done using .json() which itself returns a promise, which
		//is why we need the promise.all again and store in new variable called
		//data
		let data = await Promise.all(res.map((response) => {
			return response.json();
		}))

		return data
	}


export default getKantoPokemon


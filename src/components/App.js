import React from 'react'
import List from './List.js'
import Details from './Details.js'
import '../styles/layout.scss'
import { getKantoPokemon } from '../api/getKantoPokemon'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { pokemonList: [], activePokemon: null }
		this.getSelectedPokemon = this.getSelectedPokemon.bind(this)
	}

	async componentDidMount () {
		let res = await getKantoPokemon()
		this.setState({ pokemonList: res })
		//console.log(this.state.pokemonList)
	}

	getSelectedPokemon (index) {
		const pokemonSelected = this.state.pokemonList[index]
		this.setState({ activePokemon: pokemonSelected })
	}

	render () {
		return (
			<main className="container">
				<List pokemonList={this.state.pokemonList} getSelectedPokemon={this.getSelectedPokemon} />
				<Details activePokemon={this.state.activePokemon} />
			</main>
		)
	}
}

export default App
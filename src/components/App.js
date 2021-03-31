import React from 'react'
import List from './List.js'
import Details from './Details.js'
import '../styles/layout.scss'
import { getKantoPokemon } from '../api/getKantoPokemon'
import ReactLoading from 'react-loading'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pokemonList: [],
			activePokemon: null,
			isLoading: true
		}
		this.getSelectedPokemon = this.getSelectedPokemon.bind(this)
	}

	async componentDidMount () {
		let res = await getKantoPokemon()
		this.setState({ pokemonList: res, isLoading: false })
	}

	getSelectedPokemon (index) {
		const pokemonSelected = this.state.pokemonList[index]
		this.setState({ activePokemon: pokemonSelected })
	}

	render () {
		return (
			<main className="container">
				{ this.state.isLoading ? (
					<div className="loading-bars">
						<ReactLoading type={"bubbles"} color={"white"} />
					</div>
				) :
					(
						<>
							<List pokemonList={this.state.pokemonList} getSelectedPokemon={this.getSelectedPokemon} />
							<Details activePokemon={this.state.activePokemon} getSelectedPokemon={this.getSelectedPokemon} pokemonList={this.state.pokemonList} />
						</>
					)}
			</main>
		)
	}
}

export default App
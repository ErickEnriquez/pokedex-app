import React from 'react'
import Screen from './Screen.js'
import List from './List'
import '../styles/layout.scss'
import { getKantoPokemon } from '../api/getKantoPokemon'
import ReactLoading from 'react-loading'
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			pokemonList: [],
			activePokemon: null,
			isLoading: true,
			showModal: false,
		}
		this.getSelectedPokemon = this.getSelectedPokemon.bind(this)
		this.showModal = this.showModal.bind(this)
		this.hideModal = this.hideModal.bind(this)
	}
	//just toggled modal on on off
	showModal = () => { this.setState({ showModal: true }) }
	hideModal = () => { this.setState({ showModal: false }) }

	// get list of pokemon and update state
	async componentDidMount () {
		let res = await getKantoPokemon()
		this.setState({ pokemonList: res, isLoading: false })
	}

	// gets selected mon given index , is used by children to update state in parent
	getSelectedPokemon (index) {
		const pokemonSelected = this.state.pokemonList[index]
		this.setState({ activePokemon: pokemonSelected, showModal: false })
	}

	render () {
		return (
			<main className="container">
				{ this.state.isLoading ?

					<div className="loading-bars">
						<ReactLoading type={"bubbles"} color={"white"} />
					</div>
					:
					<>
						<Screen
							activePokemon={this.state.activePokemon}
							getSelectedPokemon={this.getSelectedPokemon}
							pokemonList={this.state.pokemonList}
						/>
						<List
							show={this.state.showModal}
							handleClose={this.hideModal}
							pokemonList={this.state.pokemonList}
							getSelectedPokemon={this.getSelectedPokemon}
							activePokemon={this.state.activePokemon}
						/>


						<button type="button" onClick={this.showModal}> Open </button>

					</>
				}
			</main>
		)
	}
}

export default App
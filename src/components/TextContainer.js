import React from 'react'
import { getFlavorText } from '../api/getFlavorText'
import { getEvolutionChain } from '../api/getEvolutionChain'
class TextContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			flavorText: '',
			evolutionChain: []
		}
		this.changeActivePokemon = this.changeActivePokemon.bind(this)
	}

	async componentDidUpdate (prevProps, prevState) {
		if (prevProps.activePokemon !== this.props.activePokemon) {
			let flavorText = await getFlavorText(this.props.activePokemon)
			const evolutionChain = await getEvolutionChain(this.props.activePokemon)
			this.setState({ flavorText, evolutionChain })
		}
	}

	changeActivePokemon (event) {
		const val = event.target.alt

		const index = this.props.pokemonList.findIndex((pokemon) => pokemon.name === val)

		if (index === -1) {
			alert('Sorry No Info Available')
			return
		}
		this.props.getSelectedPokemon(index)
	}
	render () {
		const pokemonChain = this.state.evolutionChain ? this.state.evolutionChain.map(pokemon => {
			return (
				<span className="pokemon-sprite" key={pokemon.name} value={pokemon.name} onClick={this.changeActivePokemon}>
					<p>{pokemon.name}</p>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} value={pokemon.name} />
				</span>
			)
		}) : null

		return (
			<div className="text-container">
				<div className="flavor-text">
					<div className="attribute-title text-center">Pokemon Description:</div>
					{this.state.flavorText}
				</div>
				<h3>Pokemon Evolution Chain</h3>
				<div className="pokemon-chain">
					{pokemonChain}
				</div>
			</div>
		)
	}
}

export default TextContainer
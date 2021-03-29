import React from 'react'
import PokemonFrame from './PokemonFrame.js'
import PokemonAttributes from './PokemonAttributes.js'
import TextContainer from './TextContainer'
import PokemonStats from './PokemonStats.js'

class Details extends React.Component {
	render () {
		return (
			<div className="pokedex-details">
				<PokemonFrame activePokemon={this.props.activePokemon} />
				<PokemonAttributes activePokemon={this.props.activePokemon} />
				<TextContainer activePokemon={this.props.activePokemon} getSelectedPokemon={this.props.getSelectedPokemon} pokemonList={this.props.pokemonList} />
				<PokemonStats activePokemon={this.props.activePokemon} />
			</div>
		)
	}
}

export default Details
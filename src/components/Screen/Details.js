import React from 'react'
import PokemonFrame from './PokemonFrame.js'
import PokemonAttributes from './PokemonAttributes.js'
import TextContainer from './TextContainer'
import PokemonStats from './PokemonStats.js'

class Details extends React.Component {
	render () {
		return (
			<div className="pokedex-details">
				<div className="row-one">
					<PokemonFrame
						activePokemon={this.props.activePokemon}
					/>
					<PokemonAttributes
						activePokemon={this.props.activePokemon}
					/>
				</div>
				<div className="row-two">
					<TextContainer
						activePokemon={this.props.activePokemon}
						getSelectedPokemon={this.props.getSelectedPokemon}
						pokemonList={this.props.pokemonList}
					/>
					<PokemonStats
						activePokemon={this.props.activePokemon}
					/>
				</div>
			</div>
		)
	}
}

export default Details
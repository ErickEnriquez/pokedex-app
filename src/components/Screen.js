import React from 'react'
import PokemonFrame from './Screen/PokemonFrame.js'
import PokemonAttributes from './Screen/PokemonAttributes.js'
import TextContainer from './Screen/TextContainer'
import PokemonStats from './Screen/PokemonStats.js'

class Screen extends React.Component {
	render () {
		return (
			<section className="screen">
				<div className="pokedex-Screen">
					<div className="row-one">
						<PokemonFrame
							activePokemon={this.props.activePokemon}
						/>
						<PokemonAttributes
							activePokemon={this.props.activePokemon}
							showModal={this.props.showModal}
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
			</section>
		)
	}
}

export default Screen
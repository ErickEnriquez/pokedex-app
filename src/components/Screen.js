import React from 'react'
import PokemonFrame from 'components/Screen/PokemonFrame.js'
import PokemonAttributes from 'components/Screen/PokemonAttributes.js'
import TextContainer from 'components/Screen/TextContainer'
import PokemonStats from 'components/Screen/PokemonStats.js'
import GameBoyTitle from 'components/Screen/GameBoyTitle.js'
import PowerIndicator from 'components/Screen/PowerIndicator.js'

class Screen extends React.Component {
	render () {
		return (
			<>
				<section className="screen">
					<div className="pokedex-Screen">
						<PowerIndicator />
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
				<GameBoyTitle />
			</>
		)
	}
}

export default Screen
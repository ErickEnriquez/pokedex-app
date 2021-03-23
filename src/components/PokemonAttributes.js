import React from 'react'

class PokemonAttributes extends React.Component {

	render () {
		const activePokemon = this.props.activePokemon ? this.props.activePokemon : null

		const pokedexEntry = activePokemon ? (
			<div className="pokedex-entry">
				<span className="attribute-title">No: </span> <span>{activePokemon.game_indices[9].game_index}</span>
			</div>
		) : null

		const weightAndHeight = activePokemon ? (
			<div className="pokemon-w-t">
				<span className="attribute-title">
					Weight: {(activePokemon.weight) / 10} kg
				</span>
				<span className="attribute-title">
					Height: {(activePokemon.height) / 10} m
				</span>
			</div>
		) : null

		const types = activePokemon ? activePokemon.types.map((item, index) => {
			return (
				<div key={index} className={`${item.type.name}`} >
					{item.type.name}
				</div>
			)
		}) : null

		const abilities = activePokemon ? activePokemon.abilities.map((item, index) => {
			return (
				<span key={index} className="pokemon-ability">
					{item.ability.name}
				</span>
			)
		}) : null

		return (
			< div className="pokemon-attributes" >
				{pokedexEntry}
				<div className="pokemon-types">
					<span className="attribute-title">Types: </span>
					{types}
				</div>
				{weightAndHeight}
				<div className="pokemon-abilities">
					<span className="attribute-title">Pokemon Abilities:</span> {abilities}
				</div>
			</div>
		)
	}
}

export default PokemonAttributes

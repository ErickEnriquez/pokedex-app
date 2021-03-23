import React from 'react'

class PokemonAttributes extends React.Component {

	render () {
		const activePokemon = this.props.activePokemon ? this.props.activePokemon : null
		const height = activePokemon ? ` height ${(activePokemon.height) / 10} m` : null
		const weight = activePokemon ? ` weight ${(activePokemon.weight) / 10} kg` : null
		const types = activePokemon ? activePokemon.types.map((item, index) => {
			return (
				<div key={index} className={item.type.name} >
					{item.type.name}
				</div>
			)
		}) : null
		return (
			< div className="pokemon-attributes" >
				<p>{height}</p>
				<p>{weight}</p>
				{types}
			</div>
		)
	}
}

export default PokemonAttributes

import React from 'react'

class PokemonAttributes extends React.Component {
	render () {

		const attributes = this.props.activePokemon ? this.props.activePokemon.name : 'no name'
		return (
			< div className="pokemon-attributes" >
				{attributes}
			</div>
		)
	}
}

export default PokemonAttributes

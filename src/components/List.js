
import React from 'react'

class List extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick (event) {
		this.props.getSelectedPokemon(event.target.value)
	}

	render () {
		return (
			<div className="pokemon-list-container" >
				<ul className="pokemon-list">
					{this.props.pokemonList.map((pokemon, index) => {
						return (
							<li className={`${pokemon.types[0].type.name} white-text`} key={pokemon.name} value={index} onClick={this.handleClick}>
								{pokemon.name}
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}


export default List

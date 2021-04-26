
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
		const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

		return (
			<div className={showHideClassName} >
				<section className="modal-main">
					<ul className="pokemon-list">
						{this.props.pokemonList?.map((pokemon, index) => {
							return (
								<li
									className={`${pokemon.types[0].type.name} white-text`}
									key={pokemon.name}
									value={index}
									onClick={this.handleClick}>
									{pokemon.name}
								</li>
							)
						})}
					</ul>
				</section>
			</div>
		)
	}
}


export default List

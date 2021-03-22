import React from 'react'

const PokemonStats = (props) => {
	const activePokemon = props.activePokemon ? props.activePokemon.stats : null
	
	//return array of stats if we have an active pokemon
	const stats = activePokemon ? activePokemon.length > 0 && activePokemon.map((item, index) => {
		return (
			<div className={`stats ${item.stat.name}`} key={index}>
				<span>{item.stat.name}:</span>
				<span>{item.base_stat}</span>
			</div>)
	}) : ''

	return (
		<div className="pokemon-stats">
			{stats}
		</div>
	)
}

export default PokemonStats

import React from 'react'

//displays the Pokemon's Name as well as its image, might add motion and
//ability to change generation so I think its a good idea to break into a new
//component
const PokemonFrame = (props) => {
	//const image = props.activePokemon ? props.activePokemon.sprites.versions['generation-i']['red-blue'].front_default : ''
	//const image = props.activePokemon ? props.activePokemon.sprites.versions['generation-iii']['emerald'].front_default : ''
	//const image = props.activePokemon ? props.activePokemon.sprites.versions['generation-ii']['crystal'].front_default : ''
	const image = props.activePokemon ? props.activePokemon.sprites.front_default : ''
	return (
		<div className="pokemon-frame">
			{props.activePokemon ?
				<>
					<div className="pokemon-name">
						<h3>{props.activePokemon.name}</h3>
					</div>
					<div className="pokemon-image">
						<img src={image} alt={props.activePokemon.name}></img>
					</div>
				</>
				: ''}
		</div>
	)
}

export default PokemonFrame

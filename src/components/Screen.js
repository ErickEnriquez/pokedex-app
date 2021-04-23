
import List from './Screen/List'
import Details from './Screen/Details'

const Screen = (props) => {
	return (
		<div className="screen">
			<List pokemonList={props.pokemonList}
				getSelectedPokemon={props.getSelectedPokemon}
			/>
			<Details
				activePokemon={props.activePokemon}
				getSelectedPokemon={props.getSelectedPokemon}
				pokemonList={props.pokemonList}
			/>
		</div>
	)
}

export default Screen


import List from './List'
import Details from './Details'

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

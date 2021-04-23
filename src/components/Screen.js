
import Details from './Screen/Details'
const Screen = (props) => {
	return (
		<div className="screen">
			<Details
				activePokemon={props.activePokemon}
				getSelectedPokemon={props.getSelectedPokemon}
				pokemonList={props.pokemonList}
			/>
		</div>
	)
}

export default Screen

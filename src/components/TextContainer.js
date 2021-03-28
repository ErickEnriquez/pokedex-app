import React from 'react'
import { getFlavorText } from '../api/getFlavorText'
import { getEvolutionChain } from '../api/getEvolutionChain'
class TextContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			flavorText: '',
			evolutionChain: []
		}
	}

	async componentDidUpdate (prevProps, prevState) {
		if (prevProps.activePokemon !== this.props.activePokemon) {
			let flavorText = await getFlavorText(this.props.activePokemon)
			const evolutionChain = await getEvolutionChain(this.props.activePokemon)
			this.setState({ flavorText, evolutionChain })
		}
	}
	render () {

		const pokemonChain = this.state.evolutionChain ? this.state.evolutionChain.map(element => {
			return (
				<span className="pokemon-sprite" key={element.name}>
					<p>{element.name}</p>
					<img src={element.sprites.front_default} alt={element.name} />
				</span>
			)
		}) : null

		return (
			<div className="text-container">
				<div className="flavor-text">
					<div className="attribute-title text-center">Pokemon Description:</div>
					<br />
					{this.state.flavorText}
				</div>
				<h3>Pokemon Evolution Chain</h3><br/>
				<div className="pokemon-chain">
					{pokemonChain}
				</div>
			</div>
		)
	}
}

export default TextContainer
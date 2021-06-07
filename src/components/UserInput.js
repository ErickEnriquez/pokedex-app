//Encapsulate the User Input 
import Gamepad from 'components/UserInput/Gamepad'
import Button from 'components/UserInput/RoundButton'
import React from 'react'

class UserInput extends React.Component {

	render () {

		const UI = this.props.show ? null : (
			<div className="user-input">
				<Gamepad
					pokemonList={this.props.pokemonList}
					getSelectedPokemon={this.props.getSelectedPokemon}
					activePokemon={this.props.activePokemon}
				/>
				<div className="round-buttons">
					<Button buttonName={'B'} />
					<Button buttonName={'A'} />
				</div>
			</div>
		)

		return (
			<>
				{UI}
			</>
		)
	}
}

export default UserInput
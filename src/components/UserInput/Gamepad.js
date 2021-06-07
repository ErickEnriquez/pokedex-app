import React from 'react'

class Gamepad extends React.Component {

	constructor(props) {
		super(props)
		this.pressButton = this.pressButton.bind(this)
	}
	//move the
	pressButton = (event) => {
		event.preventDefault()
		const activeButton = event.target.id
		const currentIndex = this.props.pokemonList.findIndex(element => element.name === this.props.activePokemon.name)


		let newIndex = 0
		if (activeButton === 'up' || activeButton === 'right') {
			newIndex = currentIndex + 1
		}
		else if (activeButton === 'down' || activeButton === 'left') {
			newIndex = currentIndex - 1
		}
		this.props.getSelectedPokemon(newIndex)
	}

	render () {
		return (
			<div className="set">
				<nav className="d-pad">
					<a className="up" id="up" href="#" onClick={this.pressButton}></a>
					<a className="right" id="right" href="#" onClick={this.pressButton}></a>
					<a className="down" id="down" href="#" onClick={this.pressButton}></a>
					<a className="left" id="left" href="#" onClick={this.pressButton}></a>
				</nav>
			</div>
		)
	}
}
export default Gamepad
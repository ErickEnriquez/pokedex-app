import React from 'react'
import { getFlavorText } from '../api/getFlavorText'
class TextContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			flavorText: ''
		}
	}

	async componentDidUpdate (prevProps, prevState) {
		if (prevState !== this.props.activePokemon && this.props.activePokemon !== null) {
			let results = await getFlavorText(this.props.activePokemon)
			this.setState({ flavorText: results })
		}
	}
	render () {

		return (
			<div className="text-container">

				{this.state.flavorText}
			</div>
		)
	}
}

export default TextContainer
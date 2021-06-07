import React from 'react'

class RoundButton extends React.Component {

	render () {
		return (
			<button className="round-button">{this.props.buttonName}</button>
		)
	}
}

export default RoundButton
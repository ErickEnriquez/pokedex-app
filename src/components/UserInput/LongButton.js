import React from 'react'

class LongButton extends React.Component {
	render () {
		return (
			<button className="long-button">{this.props.buttonText}</button>
		)
	}
}

export default LongButton
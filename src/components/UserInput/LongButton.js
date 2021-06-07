import React from 'react'

class LongButton extends React.Component {
	render () {
		return (
			<button className="long-button" onClick={this.props.showModal}>{this.props.buttonText}</button>
		)
	}
}

export default LongButton
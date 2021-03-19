import React from 'react'

class TextContainer extends React.Component {
	render () {
		const temp = 'This is a test'
		return (
			<div className="text-container">
				{temp}
			</div>
		)
	}
}

export default TextContainer
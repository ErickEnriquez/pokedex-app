//Encapsulate the User Input 
import Gamepad from 'components/UserInput/Gamepad'
import Button from 'components/UserInput/RoundButton'
import React from 'react'

class UserInput extends React.Component {
	render () {
		const UI = this.props.show ? null : (
			<>
				<Gamepad />
			</>
		)

		return (
			<>
				{UI}
			</>
		)
	}
}

export default UserInput
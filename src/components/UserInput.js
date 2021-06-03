//Encapsulate the User Input 
import Gamepad from 'components/UserInput/Gamepad'
import Button from 'components/UserInput/RoundButton'
import React from 'react'

class UserInput extends React.Component {

	render () {
		return (
			<>
				<Gamepad />
			</>
		)
	}
}

export default UserInput
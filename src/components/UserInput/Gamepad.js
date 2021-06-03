import React from 'react'

class Gamepad extends React.Component {
	render () {
		return (
			<div className="set">
				<nav className="d-pad">
					<a className="up" href="#"></a>
					<a className="right" href="#"></a>
					<a className="down" href="#"></a>
					<a className="left" href="#"></a>
				</nav>
			</div>
		)
	}
}
export default Gamepad
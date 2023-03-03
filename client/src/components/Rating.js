import React from 'react'
import styled from 'styled-components'

const DEFAULT = '❄️'
const SELECTED = '🔥'

const Rating = () => {
	const [currentRating, setCurrentRating] = React.useState(0)
	const [potentialRating, setPotentialRating] = React.useState(0)

	function onMouseEnter(event) {
		event.preventDefault()
		const position = event.target.getAttribute('position')
		setPotentialRating(position)
	}

	function chooseIcon(position) {
		if (currentRating >= position || potentialRating >= position) {
			return SELECTED
		}
		return DEFAULT
	}

	function onMouseLeave() {
		setPotentialRating(0)
	}

	function onClick(event) {
		event.preventDefault()
		const position = event.target.getAttribute('position')
		if (currentRating === position) {
			setCurrentRating(0)
		} else {
			setCurrentRating(position)
		}
	}

	function onKeyPress(event) {
		onClick(event)
	}
	return (
		<RatingWrapper>
			<span style={{ display: 'flex' }} onMouseLeave={onMouseLeave}>
				<span
					tabIndex="0"
					onKeyPress={onKeyPress}
					onMouseEnter={onMouseEnter}
					onClick={onClick}
					position={1}
				>
					{chooseIcon(1)}
				</span>
				<span
					tabIndex="0"
					onMouseEnter={onMouseEnter}
					onClick={onClick}
					position={2}
				>
					{chooseIcon(2)}
				</span>
				<span
					tabIndex="0"
					onMouseEnter={onMouseEnter}
					onClick={onClick}
					position={3}
				>
					{chooseIcon(3)}
				</span>
				<span
					tabIndex="0"
					onMouseEnter={onMouseEnter}
					onClick={onClick}
					position={4}
				>
					{chooseIcon(4)}
				</span>
				<span
					tabIndex="0"
					onMouseEnter={onMouseEnter}
					onClick={onClick}
					position={5}
				>
					{chooseIcon(5)}
				</span>
			</span>
		</RatingWrapper>
	)
}

export default Rating

const RatingWrapper = styled.div`
	display: contents;
	font-size: xx-large;
	height: 50px;
`

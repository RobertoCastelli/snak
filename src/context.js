import React, { useState } from 'react'
import { TITLE, LENGTH_Y, LENGTH_X, DIRECTIONS } from './constants'
//ICONS
import { ImBug } from 'react-icons/im'
import { GiToadTeeth } from 'react-icons/gi'
import useInterval from './useInterval'
// CONTEXT
export const DataContext = React.createContext()

function ContextProvider(props) {
	// useState
	const [score, setScore] = useState(0)
	const [direction, setDirection] = useState(DIRECTIONS.RIGHT)
	const [snake, setSnake] = useState([
		{
			x: 9,
			y: 9,
		},
		{
			x: 8,
			y: 9,
		},
	])

	// GRID CREATION
	const cells = Array.from({ length: LENGTH_X }, () =>
		Array.from({ length: LENGTH_Y })
	)

	// FOOD RANDOM POSITION
	const food = {
		x: Math.round(Math.random() * LENGTH_X),
		y: Math.round(Math.random() * LENGTH_Y),
	}

	// CELL DISPLAY OBJ --> (food - snake)
	const getCellContent = (x, y, snake) => {
		// FOOD DISPLAY
		if (x === food.x && y === food.y) {
			return (
				<div className='bug'>
					<ImBug />
				</div>
			)
		}
		// SNAKE DISPLAY
		for (const piece of snake) {
			if (x === piece.x && y === piece.y) {
				return (
					<div className='snake'>
						<GiToadTeeth />
					</div>
				)
			}
		}
	}

	// SNAKE NEW POSITION
	const snakeNewPosition = (direction, snake) => {
		return snake.map((piece) => {
			return { x: piece.x + direction.x, y: piece.y + direction.y }
		})
	}

	useInterval(() => {
		setSnake((piece) => snakeNewPosition(direction, piece))
	}, 500)

	// RENDER
	return (
		<DataContext.Provider
			value={{ TITLE, cells, score, snake, food, getCellContent }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider

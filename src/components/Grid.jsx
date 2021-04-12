import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'

// FC
const Grid = () => {
	const { cells, snake, getCellContent } = useContext(DataContext)

	return (
		<div className='grid'>
			{cells.map((_, x) => {
				return (
					<div key={x} className='rows'>
						{cells.map((_, y) => {
							return (
								<div key={y} className='cells'>
									{getCellContent(x, y, snake) || ''}
								</div>
							)
						})}
					</div>
				)
			})}
		</div>
	)
}

export default Grid

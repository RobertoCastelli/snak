import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'

// FC
const Grid = () => {
	const { cells } = useContext(DataContext)

	return (
		<div className='grid'>
			{cells.map((rows, i) => {
				return (
					<div key={i} className='rows'>
						{rows.map((_, j) => {
							return <div key={j} className='cells'></div>
						})}
					</div>
				)
			})}
		</div>
	)
}

export default Grid

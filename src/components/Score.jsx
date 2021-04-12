import React, { useContext } from 'react'
// CONTEXT
import { DataContext } from '../context'

// FC
const Score = () => {
	const { score } = useContext(DataContext)

	return (
		<div>
			<p>score {score}</p>
		</div>
	)
}

export default Score

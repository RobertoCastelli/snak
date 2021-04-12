import React, { useState } from 'react'
import { constants } from './constants'
// CONTEXT
export const DataContext = React.createContext()

// FC
const ContextProvider = (props) => {
	// CONSTANTS
	const { TITLE, LENGTH_Y, LENGTH_X } = constants

	// GRID
	const initialGrid = Array.from({ length: LENGTH_X }, () =>
		Array.from({ length: LENGTH_Y })
	)

	const [cells, setCells] = useState(initialGrid)
	const [score, setScore] = useState(0)

	// RENDER
	return (
		<DataContext.Provider value={{ TITLE, cells, score }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider

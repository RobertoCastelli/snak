import React from "react"
// CONTEXT
export const DataContext = React.createContext()

// FC
const ContextProvider = (props) => {
	// VARIABLES
	const title = "Snak!"

	// RENDER
	return (
		<DataContext.Provider value={{ title }}>
			{props.children}
		</DataContext.Provider>
	)
}

export default ContextProvider

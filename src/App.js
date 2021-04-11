import React from "react"
import Footer from "./components/Footer"
import Grid from "./components/Grid"
import Score from "./components/Score"
import Title from "./components/Title"

const App = () => {
	return (
		<div className='container'>
			<div className='content'>
				<Title />
				<Score />
				<Grid />
			</div>
			<Footer />
		</div>
	)
}

export default App

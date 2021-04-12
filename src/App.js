import React from 'react'
import Footer from './components/Footer'
import Grid from './components/Grid'
import Score from './components/Score'
import Header from './components/Header'

function App() {
	return (
		<div className='container'>
			<div className='content'>
				<Header />
				<Grid />
				<Score />
			</div>
			<Footer />
		</div>
	)
}

export default App

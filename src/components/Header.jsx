import React, { useContext } from 'react'
// ICONS
import { FaReact } from 'react-icons/fa'
import { GiSandSnake } from 'react-icons/gi'
// CONTEXT
import { DataContext } from '../context'

// FC
const Header = () => {
	const { TITLE } = useContext(DataContext)

	return (
		<header className='title'>
			<h1>{TITLE}</h1>
			<div className='sub-title'>
				<div className='snake-title'>
					<GiSandSnake size={20} />
				</div>
				<div>powered with</div>
				<div className='spinner-title'>
					<FaReact size={20} />
				</div>
			</div>
		</header>
	)
}

export default Header

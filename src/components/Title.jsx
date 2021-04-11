import React, { useContext } from "react"
// ICONS
import { FaReact } from "react-icons/fa"
// CONTEXT
import { DataContext } from "../context"

const Title = () => {
	const { title } = useContext(DataContext)

	return (
		<div>
			<h1>{title}</h1>
			<p>
				powered with <FaReact size={20} />
			</p>
		</div>
	)
}

export default Title

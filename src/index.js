import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import ContexProvider from "./context"

ReactDOM.render(
	<React.StrictMode>
		<ContexProvider>
			<App />
		</ContexProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

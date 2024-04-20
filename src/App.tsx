import React from "react";
import "./App.css";
import {Sidebar} from "./Sidebar/sidebar";
import {Helmet} from "react-helmet";

function App() {
	return (
		<div className="App">
			<Helmet>
				{/* <link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min."
				/> */}
			</Helmet>
			<Sidebar />
		</div>
	);
}

export default App;

import React from "react";
import "./assets/styles/app.scss";
import TopNav from "./components/Navigation/TopNav";
import SideNav from "./components/Navigation/SideNav";
import Dashboard from "./components/Dashboard";

function App() {
	return (
		<div className="App">
			<TopNav />
			<div style={{ display: "inline-flex" }}>
				<SideNav />
				<Dashboard />
			</div>
		</div>
	);
}

export default App;

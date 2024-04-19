import React, {useState} from "react";
import "./sidebar.css";
import {SidebarButton} from "./sidebarbutton";

export function Sidebar() {
	const [activeSection, setActiveSection] = useState<string>("none");

	return (
		<div className="sidebar">
			<SidebarButton name="Challenges">
				<div className="dropdown-container">
					<a href="nuzlocke.html">Nuzlocke</a>
					<a href="sample.html">Demonless</a>
					<a href="sample.html">Fiendless</a>
				</div>
			</SidebarButton>
			<SidebarButton name="Maps">
				<div className="dropdown-container">
					<a href="/Medical_Center.html">Shinjuku Medical Center</a>
					<a href="sample.html">Yoyogi Park West</a>
					<a href="/Shibuya.html">Shibuya</a>
					<button className="dropdown-btn">
						Amala Network
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Amala Network 1</a>
						<a href="sample.html">Amala Network 2</a>
						<a href="sample.html">Amala Network 3</a>
					</div>
					<a href="sample.html">Ginza</a>
					<a href="sample.html">Great Underpass of Ginza</a>
					<a href="sample.html">Ikebukuro</a>
					<a href="sample.html">Mantra Headquarters</a>
					<a href="sample.html">Assembly of Nihilo</a>
					<a href="sample.html">Kabukicho Prison</a>
					<button className="dropdown-btn">
						Metro Stations
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Ikebukuro Tunnel</a>
						<a href="sample.html">Asakusa Station</a>
						<a href="sample.html">Yurakucho Station</a>
					</div>
					<a href="sample.html">Asakusa</a>
					<a href="sample.html">Nihilo 2</a>
					<a href="sample.html">The Obelisk</a>
					<button className="dropdown-btn">
						Amala Temple
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Black Temple</a>
						<a href="sample.html">Red Temple</a>
						<a href="sample.html">White Temple</a>
					</div>
					<a href="sample.html">Yoyogi Park East</a>
					<a href="sample.html">Mifunashiro</a>
					<a href="sample.html">Diet Building</a>
					<a href="sample.html">Tower of Kagutsuchi</a>
					<a href="sample.html">Bandou Shrine</a>
					<button className="dropdown-btn">
						Labyrinth of Amala
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">First Kalpa</a>
						<a href="sample.html">Second Kalpa</a>
						<a href="sample.html">Third Kalpa</a>
						<a href="sample.html">Fourth Kalpa</a>
						<a href="sample.html">Fifth Kalpa</a>
					</div>
					<button className="dropdown-btn">
						Overworld
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Shibuya</a>
						<a href="sample.html">Ginza</a>
						<a href="sample.html">Ikebukuro</a>
						<a href="sample.html">Kabukicho</a>
						<a href="sample.html">Asakusa</a>
						<a href="sample.html">The Obelisk</a>
						<a href="sample.html">Amala Temple</a>
						<a href="sample.html">Diet Building</a>
					</div>
				</div>
			</SidebarButton>
			<button
				className="dropdown-btn"
				onClick={() => {
					if (activeSection === "Maps") {
						setActiveSection("none");
					} else {
						setActiveSection("Maps");
					}
				}}
			>
				Maps
				<i className="fa fa-caret-down"></i>
			</button>
			{activeSection === "Maps" && (
				<div className="dropdown-container">
					<a href="/Medical_Center.html">Shinjuku Medical Center</a>
					<a href="sample.html">Yoyogi Park West</a>
					<a href="/Shibuya.html">Shibuya</a>
					<button className="dropdown-btn">
						Amala Network
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Amala Network 1</a>
						<a href="sample.html">Amala Network 2</a>
						<a href="sample.html">Amala Network 3</a>
					</div>
					<a href="sample.html">Ginza</a>
					<a href="sample.html">Great Underpass of Ginza</a>
					<a href="sample.html">Ikebukuro</a>
					<a href="sample.html">Mantra Headquarters</a>
					<a href="sample.html">Assembly of Nihilo</a>
					<a href="sample.html">Kabukicho Prison</a>
					<button className="dropdown-btn">
						Metro Stations
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Ikebukuro Tunnel</a>
						<a href="sample.html">Asakusa Station</a>
						<a href="sample.html">Yurakucho Station</a>
					</div>
					<a href="sample.html">Asakusa</a>
					<a href="sample.html">Nihilo 2</a>
					<a href="sample.html">The Obelisk</a>
					<button className="dropdown-btn">
						Amala Temple
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Black Temple</a>
						<a href="sample.html">Red Temple</a>
						<a href="sample.html">White Temple</a>
					</div>
					<a href="sample.html">Yoyogi Park East</a>
					<a href="sample.html">Mifunashiro</a>
					<a href="sample.html">Diet Building</a>
					<a href="sample.html">Tower of Kagutsuchi</a>
					<a href="sample.html">Bandou Shrine</a>
					<button className="dropdown-btn">
						Labyrinth of Amala
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">First Kalpa</a>
						<a href="sample.html">Second Kalpa</a>
						<a href="sample.html">Third Kalpa</a>
						<a href="sample.html">Fourth Kalpa</a>
						<a href="sample.html">Fifth Kalpa</a>
					</div>
					<button className="dropdown-btn">
						Overworld
						<i className="fa fa-caret-down"></i>
					</button>
					<div className="sub-container">
						<a href="sample.html">Shibuya</a>
						<a href="sample.html">Ginza</a>
						<a href="sample.html">Ikebukuro</a>
						<a href="sample.html">Kabukicho</a>
						<a href="sample.html">Asakusa</a>
						<a href="sample.html">The Obelisk</a>
						<a href="sample.html">Amala Temple</a>
						<a href="sample.html">Diet Building</a>
					</div>
				</div>
			)}
			<button className="dropdown-btn">
				Items
				<i className="fa fa-caret-down"></i>
			</button>
			<div className="sub-container">
				<a href="sample.html">Healing</a>
				<a href="sample.html">Stat Boost</a>
				<a href="sample.html">Damage</a>
				<a href="sample.html">Utility</a>
				<a href="/interpage/html/Sidebar.html">Test Screen</a>
			</div>
		</div>
	);
}

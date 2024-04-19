import React from "react";
import "./sidebar.css";
import {SidebarButton} from "./sidebarbutton";

export function Sidebar() {
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
					<SidebarButton name="Amala Network">
						<div className="dropdown-container">
							<a href="sample.html">Amala Network 1</a>
							<a href="sample.html">Amala Network 2</a>
							<a href="sample.html">Amala Network 3</a>
						</div>
					</SidebarButton>
					<a href="sample.html">Ginza</a>
					<a href="sample.html">Great Underpass of Ginza</a>
					<a href="sample.html">Ikebukuro</a>
					<a href="sample.html">Mantra Headquarters</a>
					<a href="sample.html">Assembly of Nihilo</a>
					<a href="sample.html">Kabukicho Prison</a>
					<SidebarButton name="Metro Stations">
						<div className="dropdown-container">
							<a href="sample.html">Ikebukuro Tunnel</a>
							<a href="sample.html">Asakusa Station</a>
							<a href="sample.html">Yurakucho Station</a>
						</div>
					</SidebarButton>
					<a href="sample.html">Asakusa</a>
					<a href="sample.html">Nihilo 2</a>
					<a href="sample.html">The Obelisk</a>
					<SidebarButton name="Amala Temple">
						<div className="dropdown-container">
							<a href="sample.html">Black Temple</a>
							<a href="sample.html">Red Temple</a>
							<a href="sample.html">White Temple</a>
						</div>
					</SidebarButton>
					<a href="sample.html">Yoyogi Park East</a>
					<a href="sample.html">Mifunashiro</a>
					<a href="sample.html">Diet Building</a>
					<a href="sample.html">Tower of Kagutsuchi</a>
					<a href="sample.html">Bandou Shrine</a>
					<SidebarButton name="Labyrinth of Amala">
						<div className="dropdown-container">
							<a href="sample.html">First Kalpa</a>
							<a href="sample.html">Second Kalpa</a>
							<a href="sample.html">Third Kalpa</a>
							<a href="sample.html">Fourth Kalpa</a>
							<a href="sample.html">Fifth Kalpa</a>
						</div>
					</SidebarButton>
					<SidebarButton name="Overworld">
						<div className="dropdown-container">
							<a href="sample.html">Shibuya</a>
							<a href="sample.html">Ginza</a>
							<a href="sample.html">Ikebukuro</a>
							<a href="sample.html">Kabukicho</a>
							<a href="sample.html">Asakusa</a>
							<a href="sample.html">The Obelisk</a>
							<a href="sample.html">Amala Temple</a>
							<a href="sample.html">Diet Building</a>
						</div>
					</SidebarButton>
				</div>
			</SidebarButton>
			<SidebarButton name="Items">
				<div className="dropdown-container">
					<a href="sample.html">Healing</a>
					<a href="sample.html">Stat Boost</a>
					<a href="sample.html">Damage</a>
					<a href="sample.html">Utility</a>
				</div>
			</SidebarButton>
			<SidebarButton name="Bosses">
				<div className="dropdown-container">
					<a href="sample.html">Forneus</a>
					<a href="sample.html">Phantom</a>
					<a href="sample.html">Troll</a>
					<a href="sample.html" style={{color: "red"}}>
						Matador
					</a>
					<SidebarButton name="In Mantra Headquarters">
						<div className="dropdown-container">
							<a href="sample.html">Orthrus</a>
							<a href="sample.html">Yaksini</a>
							<a href="sample.html">Thor</a>
						</div>
					</SidebarButton>
					<SidebarButton name="Dante">
						<div className="dropdown-container">
							<a href="sample.html">Ikebukuro</a>
							<a href="sample.html">Third Kalpa</a>
						</div>
					</SidebarButton>
					<SidebarButton name="In Assembly of Nihilo">
						<div className="dropdown-container">
							<a href="sample.html">Eligor</a>
							<a href="sample.html">Berith</a>
							<a href="sample.html">Kaiwan</a>
							<a href="sample.html">Ose</a>
						</div>
					</SidebarButton>
					<a href="sample.html" style={{color: "red"}}>
						Daisoujou
					</a>
					<a href="sample.html" style={{color: "red"}}>
						Hell Biker
					</a>
					<a href="sample.html" style={{color: "red"}}>
						Red Rider
					</a>
					<a href="sample.html">Mizuchi</a>
					<SidebarButton name="In Ikebukuro Tunnels">
						<div className="dropdown-container">
							<a href="sample.html">Suuki</a>
							<a href="sample.html">Fuuki</a>
							<a href="sample.html">Kinki</a>
							<a href="sample.html">Ongyoki</a>
						</div>
					</SidebarButton>
					<a href="sample.html" style={{color: "red"}}>
						White Rider
					</a>
					<SidebarButton name="In the Obelisk">
						<div className="dropdown-container">
							<a href="sample.html">Clotho</a>
							<a href="sample.html">Lachesis</a>
							<a href="sample.html">Atropos</a>
							<a href="sample.html">All</a>
						</div>
					</SidebarButton>
					<a href="sample.html">Black Frost</a>
					<a href="sample.html">Mara</a>
					<a href="sample.html" style={{color: "red"}}>
						Black Rider
					</a>
					<a href="sample.html" style={{color: "red"}}>
						Pale Rider
					</a>
					<SidebarButton name="In Yoyogi Park">
						<div className="dropdown-container">
							<a href="sample.html">Girimekhala</a>
							<a href="sample.html">Sakahagi</a>
							<a href="sample.html" style={{color: "red"}}>
								Mother Harlot
							</a>
						</div>
					</SidebarButton>
					<SidebarButton name="In Amala Temple">
						<div className="dropdown-container">
							<a href="sample.html">Aciel</a>
							<a href="sample.html">Skadi</a>
							<a href="sample.html">Albion</a>
						</div>
					</SidebarButton>
					<SidebarButton name="In Mifunashiro">
						<div className="dropdown-container">
							<a href="sample.html">Futomimi</a>
							<a href="sample.html">Archangels</a>
						</div>
					</SidebarButton>
					<a href="sample.html">Bishamonten</a>
					<a href="sample.html" style={{color: "red"}}>
						Trumpeter
					</a>
					<SidebarButton name="In Diet Building">
						<div className="dropdown-container">
							<a href="sample.html">Surt</a>
							<a href="sample.html">Mada</a>
							<a href="sample.html">Mot</a>
							<a href="sample.html">Mitra</a>
						</div>
					</SidebarButton>
					<a href="sample.html" style={{color: "red"}}>
						Beelzebub
					</a>
					<a href="sample.html" style={{color: "white"}}>
						Metatron
					</a>
					<SidebarButton name="In Bandou Shrine">
						<div className="dropdown-container">
							<a href="sample.html">Bishamonten</a>
							<a href="sample.html">Jikokuten</a>
							<a href="sample.html">Koumokuten</a>
							<a href="sample.html">Zouchouten</a>
						</div>
					</SidebarButton>
					<SidebarButton name="In Tower of Kagutsuchi">
						<div className="dropdown-container">
							<a href="sample.html">Noah</a>
							<a href="sample.html">Ahriman</a>
							<a href="sample.html">Thor</a>
							<a href="sample.html">Baal Avatar</a>
							<a href="sample.html">Kagutsuchi</a>
							<a href="sample.html">Lucifer</a>
						</div>
					</SidebarButton>
					<SidebarButton name="Side Bosses">
						<div className="dropdown-container">
							<a href="sample.html">Nekomata</a>
							<a href="sample.html">Succubus</a>
							<a href="sample.html">Titan</a>
							<a href="sample.html">Legion</a>
							<a href="sample.html">Cerberus</a>
							<a href="sample.html">Loa</a>
							<a href="sample.html">Abbadon</a>
							<a href="sample.html">Rangda</a>
							<a href="sample.html">Shadow</a>
						</div>
					</SidebarButton>
				</div>
			</SidebarButton>
		</div>
	);
}

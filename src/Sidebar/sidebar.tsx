import React from "react";
import "./sidebar.css";
import {SidebarButton} from "./sidebarbutton";
import {Helmet} from "react-helmet";
import {useNavigate} from "react-router-dom";

export function Sidebar() {
	const navigate = useNavigate();
	return (
		<div className="sidebar">
			<Helmet>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</Helmet>
			<SidebarButton name="Challenges">
				<div className="dropdown-container">
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Nuzlocke
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Demonless
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Fiendless
					</button>
				</div>
			</SidebarButton>
			<SidebarButton name="Maps">
				<div className="dropdown-container">
					{/* <a href="/SMT/MedicalCenter">Shinjuku Medical Center</button> */}
					<button
						onClick={() => {
							navigate("/SMT/MedicalCenter");
						}}
						className="nav-button"
					>
						Shinjuku Medical Center
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Yoyogi Park West
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Shibuya
					</button>
					<SidebarButton name="Amala Network">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Amala Network 1
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Amala Network 2
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Amala Network 3
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Ginza
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Harumi Warehouse
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Great Underpass of Ginza
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Ikebukuro
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Mantra Headquarters
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Assembly of Nihilo
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Kabukicho Prison
					</button>
					<SidebarButton name="Metro Stations">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ikebukuro Tunnel
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Asakusa Station
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Yurakucho Station
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Asakusa
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Nihilo 2
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						The Obelisk
					</button>
					<SidebarButton name="Amala Temple">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Courtyard
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Black Temple
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Red Temple
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								White Temple
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Yoyogi Park East
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Mifunashiro
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Diet Building
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Tower of Kagutsuchi
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Bandou Shrine
					</button>
					<SidebarButton name="Labyrinth of Amala">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								First Kalpa
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Second Kalpa
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Third Kalpa
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Fourth Kalpa
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Fifth Kalpa
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="Overworld">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Shibuya
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ginza
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ikebukuro
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Kabukicho
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Asakusa
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								The Obelisk
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Amala Temple
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Diet Building
							</button>
						</div>
					</SidebarButton>
				</div>
			</SidebarButton>
			<SidebarButton name="Items">
				<div className="dropdown-container">
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Healing
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Stat Boost
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Damage
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Utility
					</button>
				</div>
			</SidebarButton>
			<SidebarButton name="Bosses">
				<div className="dropdown-container">
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Forneus
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Phantom
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Troll
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Matador
					</button>
					<SidebarButton name="In Mantra Headquarters">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Orthrus
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Yaksini
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Thor
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="Dante">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ikebukuro
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Third Kalpa
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="In Assembly of Nihilo">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Eligor
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Berith
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Kaiwan
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ose
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Daisoujou
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Hell Biker
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Red Rider
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Mizuchi
					</button>
					<SidebarButton name="In Ikebukuro Tunnels">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Suuki
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Fuuki
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Kinki
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ongyoki
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						White Rider
					</button>
					<SidebarButton name="In the Obelisk">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Clotho
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Lachesis
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Atropos
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								All
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Black Frost
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Mara
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Black Rider
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Pale Rider
					</button>
					<SidebarButton name="In Yoyogi Park">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Girimekhala
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Sakahagi
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Mother Harlot
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="In Amala Temple">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Aciel
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Skadi
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Albion
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="In Mifunashiro">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Futomimi
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Archangels
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Bishamonten
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Trumpeter
					</button>
					<SidebarButton name="In Diet Building">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Surt
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Mada
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Mot
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Mitra
							</button>
						</div>
					</SidebarButton>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Beelzebub
					</button>
					<button
						onClick={() => {
							navigate("/SMT");
						}}
						className="nav-button"
					>
						Metatron
					</button>
					<SidebarButton name="In Bandou Shrine">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Bishamonten
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Jikokuten
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Koumokuten
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Zouchouten
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="In Tower of Kagutsuchi">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Noah
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Ahriman
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Thor
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Baal Avatar
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Kagutsuchi
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Lucifer
							</button>
						</div>
					</SidebarButton>
					<SidebarButton name="Side Bosses">
						<div className="dropdown-container">
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Nekomata
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Succubus
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Titan
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Legion
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Cerberus
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Loa
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Abbadon
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Rangda
							</button>
							<button
								onClick={() => {
									navigate("/SMT");
								}}
								className="nav-button"
							>
								Shadow
							</button>
						</div>
					</SidebarButton>
				</div>
			</SidebarButton>
		</div>
	);
}

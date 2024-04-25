import React from "react";
import "./sidebar.css";
import {SidebarButton} from "./sidebarbutton";
import {Helmet} from "react-helmet";
import {NavButton} from "./navButton";

export function Sidebar({
	sidebarState,
	setSidebarState,
}: {
	sidebarState: Map<string, boolean>;
	setSidebarState: (newMapState: Map<string, boolean>) => void;
}) {
	return (
		<div className="sidebar">
			<Helmet>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
			</Helmet>
			<SidebarButton
				sidebarState={sidebarState}
				setSidebarState={setSidebarState}
				name="Challenges"
			>
				<div className="dropdown-container">
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Nuzlocke
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Demonless
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Fiendless
					</NavButton>
				</div>
			</SidebarButton>
			<SidebarButton
				name="Maps"
				sidebarState={sidebarState}
				setSidebarState={setSidebarState}
			>
				<div className="dropdown-container">
					<NavButton sidebarState={sidebarState} path={"/SMT/MedicalCenter"}>
						Shinjuku Medical Center
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Yoyogi Park West
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Shibuya
					</NavButton>
					<SidebarButton
						name="Amala Network"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Amala Network 1
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Amala Network 2
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Amala Network 3
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Ginza
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Harumi Warehouse
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Great Underpass of Ginza
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Ikebukuro
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Mantra Headquarters
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Assembly of Nihilo
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Kabukicho Prison
					</NavButton>
					<SidebarButton
						name="Metro Stations"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ikebukuro Tunnel
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Asakusa Station
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Yurakucho Station
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Asakusa
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Nihilo 2
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						The Obelisk
					</NavButton>
					<SidebarButton
						name="Amala Temple"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Courtyard
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Black Temple
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Red Temple
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								White Temple
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Yoyogi Park East
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Mifunashiro
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Diet Building
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Tower of Kagutsuchi
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Bandou Shrine
					</NavButton>
					<SidebarButton
						name="Labyrinth of Amala"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								First Kalpa
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Second Kalpa
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Third Kalpa
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Fourth Kalpa
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Fifth Kalpa
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="Overworld"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Shibuya
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ginza
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ikebukuro
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Kabukicho
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Asakusa
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								The Obelisk
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Amala Temple
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Diet Building
							</NavButton>
						</div>
					</SidebarButton>
				</div>
			</SidebarButton>
			<SidebarButton
				name="Items"
				sidebarState={sidebarState}
				setSidebarState={setSidebarState}
			>
				<div className="dropdown-container">
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Healing
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Stat Boost
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Damage
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Utility
					</NavButton>
				</div>
			</SidebarButton>
			<SidebarButton
				name="Bosses"
				sidebarState={sidebarState}
				setSidebarState={setSidebarState}
			>
				<div className="dropdown-container">
					<NavButton sidebarState={sidebarState} path={"/SMT/Forneus"}>
						Forneus
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Phantom
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Troll
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Matador
					</NavButton>
					<SidebarButton
						name="In Mantra Headquarters"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Orthrus
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Yaksini
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Thor
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="Dante"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ikebukuro
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Third Kalpa
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="In Assembly of Nihilo"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Eligor
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Berith
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Kaiwan
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ose
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Daisoujou
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Hell Biker
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Red Rider
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Mizuchi
					</NavButton>
					<SidebarButton
						name="In Ikebukuro Tunnels"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Suuki
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Fuuki
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Kinki
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ongyoki
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						White Rider
					</NavButton>
					<SidebarButton
						name="In the Obelisk"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Clotho
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Lachesis
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Atropos
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								All
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Black Frost
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Mara
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Black Rider
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Pale Rider
					</NavButton>
					<SidebarButton
						name="In Yoyogi Park"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Girimekhala
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Sakahagi
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Mother Harlot
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="In Amala Temple"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Aciel
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Skadi
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Albion
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="In Mifunashiro"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Futomimi
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Archangels
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Bishamonten
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Trumpeter
					</NavButton>
					<SidebarButton
						name="In Diet Building"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Surt
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Mada
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Mot
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Mitra
							</NavButton>
						</div>
					</SidebarButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Beelzebub
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Metatron
					</NavButton>
					<SidebarButton
						name="In Bandou Shrine"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT/Bishamonten2"}>
								Bishamonten
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Jikokuten
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Koumokuten
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Zouchouten
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="In Tower of Kagutsuchi"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Noah
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Ahriman
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Thor
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Baal Avatar
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Kagutsuchi
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Lucifer
							</NavButton>
						</div>
					</SidebarButton>
					<SidebarButton
						name="Side Bosses"
						sidebarState={sidebarState}
						setSidebarState={setSidebarState}
					>
						<div className="dropdown-container">
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Nekomata
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Succubus
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Titan
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Legion
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Cerberus
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Loa
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Abbadon
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Rangda
							</NavButton>
							<NavButton sidebarState={sidebarState} path={"/SMT"}>
								Shadow
							</NavButton>
						</div>
					</SidebarButton>
				</div>
			</SidebarButton>
			<SidebarButton
				name="Magatama"
				sidebarState={sidebarState}
				setSidebarState={setSidebarState}
			>
				<div className="dropdown-container">
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Marogareh
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Wadatsumi
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Ankh
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Iyomante
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Shiranui
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Hifumi
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Kamudo
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Narukami
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Anathema
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Miasma
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Nirvana
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Murakumo
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Geis
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Djed
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Muspell
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Gehenna
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						kamurogi
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Satan
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Adama
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Vimana
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Gundari
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Sophia
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Gaea
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Kailash
					</NavButton>
					<NavButton sidebarState={sidebarState} path={"/SMT"}>
						Masakados
					</NavButton>
				</div>
			</SidebarButton>
		</div>
	);
}

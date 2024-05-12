import React from "react";
import "../MedicalCenter.css";
export default function AnnexLobby() {
	return (
		<>
			<h1 className="roomname">Annex Lobby</h1>
			<ul>
				<li>Bosses</li>
				<p className="selectable">Forneus</p>
				<li>Encounters</li>
				<table>
					<tr>
						<th>Demon</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
						<th>XP</th>
					</tr>
					<tr>
						<td>Hua Po</td>
						<td>6</td>
						<td>40</td>
						<td>20</td>
						<td>20</td>
					</tr>
					<tr>
						<td>Shikigami</td>
						<td>6</td>
						<td>40</td>
						<td>20</td>
						<td>20</td>
					</tr>
				</table>
				<li>Items</li>
				<ul>
					<li className="selectable">Wadatsumi</li>
					<li>Revival Bead x1</li>
					<li>Medicine x2</li>
				</ul>
			</ul>
		</>
	);
}

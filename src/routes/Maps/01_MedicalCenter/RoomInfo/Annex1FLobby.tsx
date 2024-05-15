import React from "react";
import "../MedicalCenter.css";
export default function Annex1FLobby() {
	return (
		<>
			<h1>Annex Lobby</h1>
			<ul>
				<li>Items</li>
				<table className="itemtable">
					<tr>
						<th className="items">Items</th>
						<th className="qty">Qty.</th>
						<th>From</th>
					</tr>
					<tr className="magatama">
						<td>Wadatsumi</td>
						<td>1</td>
						<td>Forneus</td>
					</tr>
					<tr>
						<td>Revival Bead</td>
						<td>1</td>
						<td>Cache cube</td>
					</tr>
					<tr>
						<td>Medicine</td>
						<td>2</td>
						<td>Cache cube</td>
					</tr>
				</table>
				<li>Bosses</li>
				<table className="demontable">
					<tr>
						<th>Boss</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
						<th>Quirks</th>
					</tr>
					<tr>
						<td>Forneus</td>
						<td>8</td>
						<td>500</td>
						<td>200</td>
						<td>None</td>
					</tr>
				</table>
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Demon</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
						<th>Quirks</th>
					</tr>
					<tr>
						<td>Hua Po</td>
						<td>6</td>
						<td>40</td>
						<td>20</td>
						<td>None</td>
					</tr>
					<tr>
						<td>Shikigami</td>
						<td>6</td>
						<td>50</td>
						<td>30</td>
						<td>None</td>
					</tr>
				</table>
			</ul>
		</>
	);
}

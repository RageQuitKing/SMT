import React from "react";
import "../MedicalCenter.css";
export default function MedicalCenter2FHallwayOppositeBridge() {
	return (
		<>
			<h1>Medical Center Lobby</h1>
			<ul>
				<li>Items</li>
				<table className="itemtable">
					<tr>
						<th className="items">Items</th>
						<th className="qty">Qty.</th>
						<th>From</th>
					</tr>
					<tr>
						<td>Life Stone</td>
						<td>2</td>
						<td>Cache cube</td>
					</tr>
				</table>
				<li>Encounters</li>
				<table className="demontable">
					<tr>
						<th>Demon</th>
						<th>Level</th>
						<th>HP</th>
						<th>MP</th>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</ul>
		</>
	);
}
